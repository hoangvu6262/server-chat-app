import { model, Schema } from 'mongoose'

import { IChannel } from '../const/type.const'

const channelModel: Schema = new Schema(
    {
        name: { type: String, require: true },
        type: {
            type: String,
            default: 'Text',
            enum: ['Text', 'Audio', 'Video'],
        },

        userId: {
            type: String,
            required: true,
        },
        serverId: { type: String, require: true },

        message: {
            type: Schema.Types.Array,
            ref: 'Server',
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

export default model<IChannel>('Channel', channelModel)
