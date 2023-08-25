import { Request, Response } from 'express'
import { IUser, IMessageResponse } from '../const/type.const'
import {
    // getUserByID,
    getUserByName,
    getUserByEmail,
    creatNewUser,
    getAllUsers,
} from '../services/user.services'
import {
    isPasswordValidCheck,
    hashUserPassword,
} from '../helpers/authentication.helper'

const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const user: IUser | null = await getUserByName(username)
        const message: IMessageResponse = {
            msg: 'Incorrect Username or Password',
            status: false,
        }
        if (!user) return res.json(message)

        const isPasswordValid: boolean = await isPasswordValidCheck(
            password,
            user.password
        )
        if (!isPasswordValid) return res.json(message)
        // delete user?.password
        return res.json({ status: true, user })
    } catch (err) {
        throw new Error(err)
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body
        const usernameCheck = await getUserByName(username)
        if (usernameCheck)
            return res.json({ msg: 'Username already used', status: false })
        const emailCheck = await getUserByEmail(email)
        if (emailCheck)
            return res.json({ msg: 'Email already used', status: false })
        const hashedPassword = await hashUserPassword(password)
        const user: IUser = await creatNewUser({
            email,
            username,
            password: hashedPassword,
        })
        // delete user.password
        return res.json({ status: true, user })
    } catch (err) {
        throw new Error(err)
    }
}

const logOut = (req: Request, res: Response) => {
    try {
        if (!req.params.id) return res.json({ msg: 'User id is required ' })
        global.onlineUsers.delete(req.params.id)
        return res.status(200).send()
    } catch (err) {
        throw new Error(err)
    }
}

const getAllUsersInRoom = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers(req.params.id)
        return res.json(users)
    } catch (err) {
        throw new Error(err)
    }
}

export { login, register, logOut, getAllUsersInRoom }
