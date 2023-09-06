import { Document } from 'mongoose'

//model type
interface IUser extends Document {
    _id?: string
    username: string
    userId: String
    email: string

    isAvatarImageSet?: boolean
    avatarImage: string

    createdAt?: string
    updatedAt?: string
}

interface IMessage extends Document {
    _id: string
    message: string
    users: IUser[]
    sender: string
    fileUrl: string
    channel: IChannel

    createdAt: string
    updatedAt: string
}

interface IServer extends Document {
    _id: string
    name: string
    imageUrl: string
    inviteCode: string

    user: IUser

    members: IMember[]
    channels: IChannel[]

    createdAt: string
    updatedAt: string
}

interface IMember extends Document {
    _id: string
    role: string
    userId: string
    serverId: string

    messages: IMessage[]
    directMessages: IDirectMessage[]

    conversationsInitiated: IConversation[]
    conversationsReceived: IConversation[]

    createdAt: string
    updatedAt: string
}

interface IChannel extends Document {
    _id: string
    name: string
    type: string

    userId: string
    serverId: string

    messages: IMessage[]

    createdAt: string
    updatedAt: string
}

interface IConversation extends Document {
    _id: string
    memberOneId: string

    memberTwoId: string

    directMessages: IDirectMessage[]
}

interface IDirectMessage extends Document {
    _id: string
    content: string
    fileUrl: string

    memberId: string

    conversationId: string

    createdAt: string
    updatedAt: string
}

//common type
interface IMessageResponse {
    msg: string
    status?: boolean
}

export {
    IUser,
    IMessage,
    IMessageResponse,
    IServer,
    IChannel,
    IConversation,
    IDirectMessage,
    IMember,
}
