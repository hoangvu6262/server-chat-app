import { model, Schema } from 'mongoose'

import { IServer } from '../const/type.const'

const serverModel: Schema = new Schema(
    {
        name: { type: String, require: true },
        imageUrl: { type: String, require: true },
        inviteCode: { type: String },

        userId: { type: String, require: true },

        members: {
            type: Schema.Types.Array,
            ref: 'Member',
        },
        channels: {
            type: Schema.Types.Array,
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
