import { Router } from 'express'
import {
    getAllDirectMessageConversationId,
    addNewDirectMessage,
    getDirectMessageById,
} from '../controllers/directMessage.controller'

const directMessageRoute = (router: Router) => {
    router.get(
        '/channel/conversation/:conversationId',
        getAllDirectMessageConversationId
    )
    router.get('/direct-mess/:id', getDirectMessageById)
    router.post('/direct-mess', addNewDirectMessage)
}

export default directMessageRoute
