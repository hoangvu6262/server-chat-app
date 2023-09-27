import Member from '../models/member.model'

const getAllMemberByServer = (serverId: string) => {
    return Member.find({ serverId }).populate('serverId').exec()
}

const getMemberByUser = (userId: string) => {
    return Member.findOne({ userId }).populate({
        path: 'servers',
    })
}

const getMemberByID = (id: string) => {
    return Member.findById(id)
}

const creatNewMember = async (value: Record<string, any>) => {
    return Member.create(value)
}

const deleteMember = (id: string) => {
    return Member.findByIdAndDelete(id)
}

const updateNewServerMember = (memberId: string, serverId: string) => {
    return Member.updateOne(
        { _id: memberId },
        {
            $push: {
                servers: serverId,
            },
        }
    )
}

export {
    getMemberByUser,
    creatNewMember,
    deleteMember,
    getMemberByID,
    getAllMemberByServer,
    updateNewServerMember,
}
