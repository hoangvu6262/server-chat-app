import { Request, Response } from 'express'
import { IUser } from '../const/type.const'
import {
    // getUserByID,
    // getUserByName,
    getUserByEmail,
    creatNewUser,
    getAllUsers,
} from '../services/user.services'
import { uploadFile } from './upload.controller'

const register = async (req: Request, res: Response) => {
    try {
        const { username, email, avatarImage, userId } = req.body

        const emailCheck = await getUserByEmail(email)
        if (emailCheck)
            return res.json({ msg: 'Email already used', status: false })

        const imageUser = await uploadFile(avatarImage)

        const user: IUser = await creatNewUser({
            email,
            username,
            avatarImage: imageUser.url,
            userId,
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

export { register, logOut, getAllUsersInRoom }
