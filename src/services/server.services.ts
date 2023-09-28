import mongoose from 'mongoose'
import Server from '../models/server.model'
// import Member from '../models/member.model'
// import { MEMBER_ROLE } from '../const/roleUser.const'

const getAllServerByUser = (memberId: string) => {
    return Server.find({
        members: { $in: [new mongoose.Types.ObjectId(memberId)] },
    })
}

const getServerByName = (name: string) => {
    return Server.findOne({ name })
}

const getServerByID = (id: string) => {
    return Server.findById(id)
        .populate({
            path: 'members',
        })
        .exec()
}

const creatNewServer = (server: Record<string, any>) => {
    let newServer = new Server({
        _id: new mongoose.Types.ObjectId(),
        name: server.name,
        imageUrl: server.imageUrl,
        userId: server.userId,
    })
    newServer.save()

    return newServer

    // const newMember = new Member({
    //     role: MEMBER_ROLE.ADMIN,
    //     serverId: newServer._id,
    //     userId: server.userId,
    // })

    // newMember.save()
}

const deleteServer = (id: string) => {
    return Server.findByIdAndDelete(id)
}

const updateNewMemberServer = (
    serverId: string,
    member: Record<string, any>
) => {
    return Server.updateOne(
        { _id: serverId },
        {
            $push: {
                members: member._id,
            },
        }
    )
}

const updateServer = (server: Record<string, any>, id: string) => {
    return Server.findByIdAndUpdate(id, server, { new: true })
}

export {
    getServerByName,
    creatNewServer,
    deleteServer,
    getServerByID,
    getAllServerByUser,
    updateServer,
    updateNewMemberServer,
}
