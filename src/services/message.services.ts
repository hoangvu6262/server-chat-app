import Message from '../models/message.model'

const getAllMessages = (from: string, to: string) => {
    return Message.find({
        users: {
            $all: [from, to],
        },
    }).sort({ updatedAt: 1 })
}

const addMessage = (message: Record<string, any>) => {
    return Message.create(message)
}

export { getAllMessages, addMessage }
