import { Document } from 'mongoose'

//model type
interface IUser extends Document {
    _id: string
    username: string
    email: string
    password: string
    isAvatarImageSet: boolean
    avatarImage: string
}

interface IMessage extends Document {
    _id: string
    message: string
    users: IUser[]
    sender: string
}

//common type
interface IMessageResponse {
    msg: string
    status?: boolean
}

export { IUser, IMessage, IMessageResponse }
