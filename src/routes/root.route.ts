import express from 'express'
import authRoute from './auth.route'
import serverRoute from './server.route'
import channelRoute from './channel.route'
import converssationRoute from './conversation.route'
import directMessageRoute from './directMessage.route'

const router = express.Router()

export default (): express.Router => {
    authRoute(router)
    serverRoute(router)
    channelRoute(router)
    converssationRoute(router)
    directMessageRoute(router)
    return router
}
