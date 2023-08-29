import { Router } from 'express'
import {
    getAllServerByUserId,
    createNewServerByUser,
    getServerById,
} from '../controllers/server.controller'

const serverRoute = (router: Router) => {
    router.get('/server/by-userId/:userId', getAllServerByUserId)
    router.get('/server/by-serverId/:serverId', getServerById)
    router.post('/server', createNewServerByUser)
}

export default serverRoute
