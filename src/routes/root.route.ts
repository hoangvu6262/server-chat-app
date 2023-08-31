import express from 'express'
import authRoute from './auth.route'
import serverRoute from './server.route'
import channelRoute from './channel.route'

const router = express.Router()

export default (): express.Router => {
    authRoute(router)
    serverRoute(router)
    channelRoute(router)
    return router
}
