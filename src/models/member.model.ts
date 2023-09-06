import { model, Schema } from 'mongoose'
import { IMember } from 'src/const/type.const'

const memberSchema: Schema = new Schema(
    {
        role: { type: String, require: true },
        userId: {
            type: String,
            required: true,
        },
        serverId: { type: Schema.Types.ObjectId, ref: 'Server', require: true },

        messages: { type: Schema.Types.Array, ref: 'Message' },
        directMessages: { type: Schema.Types.Array, ref: 'DirectMessage' },
        conversationsInitiated: {
            type: Schema.Types.Array,
            ref: 'Coversation',
        },
        conversationsReceived: { type: Schema.Types.Array, ref: 'Coversation' },

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

export default model<IMember>('Member', memberSchema)
