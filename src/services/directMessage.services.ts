import DirectMessage from '../models/directMessage.model'

const getDirectMessageByID = (id: string) => {
    return DirectMessage.findById(id)
}

const creatNewDirectMessage = (value: Record<string, any>) => {
    return DirectMessage.create(value)
}

const deleteDirectMessage = (id: string) => {
    return DirectMessage.findByIdAndDelete(id)
}

export { creatNewDirectMessage, deleteDirectMessage, getDirectMessageByID }
