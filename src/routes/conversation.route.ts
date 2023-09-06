import { Router } from 'express'
import {
    addNewConversation,
    getConversationById,
} from '../controllers/conversation.controller'

const converssationRoute = (router: Router) => {
    router.get('/conversation/:id', getConversationById)
    router.post('/conversation', addNewConversation)
}

export default converssationRoute
