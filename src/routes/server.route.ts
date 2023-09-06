import { Router } from 'express'
import {
    getAllServerByUserId,
    createNewServerByUser,
    getServerById,
    updateServerById,
} from '../controllers/server.controller'

const serverRoute = (router: Router) => {
    router.get('/server/by-userId/:userId', getAllServerByUserId)
    router.get('/server/by-serverId/:serverId', getServerById)
    router.post('/server', createNewServerByUser)
    router.put('/server/:id', updateServerById)
}

export default serverRoute
