import { Router } from 'express'
import {
    login,
    register,
    getAllUsersInRoom,
    logOut,
} from '../controllers/user.controller'

const authRoute = (router: Router) => {
    router.post('/auth/login', login)
    router.post('/auth/register', register)
    router.get('/auth/allusers/:id', getAllUsersInRoom)
    router.get('/auth/logout/:id', logOut)
}

export default authRoute
