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

//common type
interface IMessage {
    msg: string
    status?: boolean
}

export { IUser, IMessage }
