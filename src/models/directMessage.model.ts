import { model, Schema } from 'mongoose'
import { IDirectMessage } from 'src/const/type.const'

const directMessageSchema: Schema = new Schema(
    {
        content: { type: String, require: true },
        fileUrl: {
            type: String,
        },
        memberId: { type: Schema.Types.ObjectId, ref: 'Member', require: true },
        conversationId: {
            type: Schema.Types.ObjectId,
            ref: 'Conversation',
            require: true,
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

export default model<IDirectMessage>('DirectMessage', directMessageSchema)
