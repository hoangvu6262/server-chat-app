import { model, Schema } from 'mongoose'
import { IMessage } from '../const/type.const'

const messageModel: Schema = new Schema(
    {
        message: {
            text: { type: String, required: true },
        },
        users: Array,
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default model<IMessage>('Message', messageModel)
