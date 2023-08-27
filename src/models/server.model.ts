import { model, Schema } from 'mongoose'

import { IServer } from '../const/type.const'

const serverModel: Schema = new Schema(
    {
        name: { type: String, require: true },
        imageUrl: { type: String, require: true },
        inviteCode: { type: String },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        members: {
            type: Schema.Types.ObjectId,
            ref: 'Member',
        },
        channels: {
            type: Schema.Types.ObjectId,
            ref: 'Channel',
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true }
)

export default model<IServer>('Server', serverModel)
