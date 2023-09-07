import Member from '../models/member.model'

const getAllMemberByServer = (serverId: string) => {
    return Member.find({ serverId })
}

const getMemberByUserAndServer = (userId: string, serverId: string) => {
    return Member.findOne({ userId, serverId })
}

const getMemberByUser = (userId: string) => {
    return Member.findOne({ userId })
}

const getMemberByID = (id: string) => {
    return Member.findById(id)
}

const creatNewMember = (value: Record<string, any>) => {
    return Member.create(value)
}

const deleteMember = (id: string) => {
    return Member.findByIdAndDelete(id)
}

export {
    getMemberByUser,
    creatNewMember,
    deleteMember,
    getMemberByID,
    getAllMemberByServer,
    getMemberByUserAndServer,
}
