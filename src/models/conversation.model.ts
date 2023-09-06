import { model, Schema } from 'mongoose'
import { IConversation } from 'src/const/type.const'

const conversationSchema: Schema = new Schema(
    {
        memberOneId: { type: String, require: true },
        memberTwoId: { type: String, require: true },

        directMessages: {
            type: Schema.Types.Array,
            ref: 'DirectMessage',
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

export default model<IConversation>('Conversation', conversationSchema)
