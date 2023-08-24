import { model, Schema } from 'mongoose'

import { IUser } from '../const/type.const'

const userModel: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        isAvatarImageSet: {
            type: Boolean,
            default: false,
        },
        avatarImage: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
)

export default model<IUser>('User', userModel)
