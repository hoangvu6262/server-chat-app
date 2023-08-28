import express from 'express'
import authRoute from './auth.route'
import serverRoute from './server.route'

const router = express.Router()

export default (): express.Router => {
    authRoute(router)
    serverRoute(router)
    return router
}
