import { Router } from 'express'
import { getMessages, createMessage } from '../controllers/message.controler'

const authRoute = (router: Router) => {
    router.post('/messages/addmsg/', createMessage)
    router.post('/messages/getmsg/', getMessages)
}

export default authRoute
