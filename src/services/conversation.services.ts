import Conversation from '../models/conversation.model'

const getConversationByID = (id: string) => {
    return Conversation.findById(id)
}

const creatNewConversation = (value: Record<string, any>) => {
    return Conversation.create(value)
}

const deleteConversation = (id: string) => {
    return Conversation.findByIdAndDelete(id)
}

export { creatNewConversation, deleteConversation, getConversationByID }
