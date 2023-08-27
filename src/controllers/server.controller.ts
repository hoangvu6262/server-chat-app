import { Request, Response } from 'express'
import { IServer, IUser } from 'src/const/type.const'
import { getUserByID } from 'src/services/user.services'
import {
    // getServerByName,
    creatNewServer,
    // deleteServer,
    getAllServerByUser,
} from '../services/server.services'

const getAllServerByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        if (!userId) {
            throw new Error('User Id is required!')
        }
        const servers: IServer[] = await getAllServerByUser(userId)

        res.json(servers)
    } catch (err) {
        throw new Error(err)
    }
}

const createNewServerByUser = async (req: Request, res: Response) => {
    try {
        const { userId, server } = req.body

        if (!userId) {
            throw new Error('User Id is required!')
        }
        if (!server) {
            throw new Error('Server Id is required!')
        }

        const user: IUser | null = await getUserByID(userId)
        if (!user) {
            throw new Error('UserId is not corrected!')
        }

        const newServer: IServer = await creatNewServer({
            ...server,
            user: user,
        })

        res.json({
            status: true,
            message: 'Create new server successfully',
            server: newServer,
        })
    } catch (err) {
        throw new Error(err)
    }
}

export { getAllServerByUserId, createNewServerByUser }
