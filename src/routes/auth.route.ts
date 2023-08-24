import { Router } from 'express'
import { login, register } from '../controllers/user.controller'

const authRoute = (router: Router) => {
    router.post('/auth/login', login)
    router.post('/auth/register', register)
}

export default authRoute
