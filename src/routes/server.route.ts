import { Router } from 'express'
import {
    getAllServerByUserId,
    createNewServerByUser,
} from '../controllers/server.controller'

const authRoute = (router: Router) => {
    router.post('/server/addmsg/:userId', getAllServerByUserId)
    router.post('/server/getmsg/', createNewServerByUser)
}

export default authRoute
