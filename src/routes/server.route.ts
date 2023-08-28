import { Router } from 'express'
import {
    getAllServerByUserId,
    createNewServerByUser,
} from '../controllers/server.controller'

const serverRoute = (router: Router) => {
    router.get('/server/:userId', getAllServerByUserId)
    router.post('/server', createNewServerByUser)
}

export default serverRoute
