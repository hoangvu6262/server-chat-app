import { Request, Response } from 'express'
import { IServer } from '../const/type.const'
import {
    // getServerByName,
    updateServer,
    creatNewServer,
    // deleteServer,
    getAllServerByUser,
    getServerByID,
} from '../services/server.services'
import { uploadFile } from './upload.controller'

const getAllServerByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        if (!userId) {
            res.json({
                status: false,
                message: 'UserId is required',
            })
        }
        const servers: IServer[] = await getAllServerByUser(userId)

        res.json(servers)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const createNewServerByUser = async (req: Request, res: Response) => {
    try {
        const { userId, server } = req.body
        const { name, imageUrl } = server

        if (!userId) {
            res.json({
                status: false,
                message: 'UserId is required',
            })
        }
        if (!name || !imageUrl) {
            res.json({
                status: false,
                message: 'Server is required',
            })
        }

        const imageServer = await uploadFile(imageUrl)

        // const user: IUser | null = await getUserByUserID(userId)
        // if (!user) {
        //     res.json({
        //         status: false,
        //         message: 'UserId is not corrected!',
        //     })
        // }

        const newServer: IServer = await creatNewServer({
            ...server,
            imageUrl: imageServer.url,
            userId,
        })

        res.json({
            status: true,
            message: 'Create new server successfully',
            server: newServer,
        })
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const getServerById = async (req: Request, res: Response) => {
    const { serverId } = req.params
    try {
        if (!serverId) {
            res.json({
                status: false,
                message: 'Server Id is required',
            })
        }
        const server = await getServerByID(serverId)

        res.json(server)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const updateServerById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await updateServer(req.body, id)
        res.json({
            status: true,
            message: `Update server: ${id} successfully `,
        })
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export {
    getAllServerByUserId,
    createNewServerByUser,
    getServerById,
    updateServerById,
}
