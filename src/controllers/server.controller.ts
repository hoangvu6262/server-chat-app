import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { IMember, IServer } from '../const/type.const'
import {
    // getServerByName,
    updateServer,
    // deleteServer,
    getAllServerByUser,
    getServerByID,
    updateNewMemberServer,
    creatNewServer,
} from '../services/server.services'
import {
    creatNewMember,
    updateNewServerMember,
    getMemberByUser,
} from '../services/member.services'
import { uploadFile } from './upload.controller'
import { MEMBER_ROLE } from '../const/roleUser.const'

const getAllServerByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        if (!userId) {
            return res.status(404).json({
                status: false,
                message: 'UserId is required',
            })
        }
        const servers: IServer[] = await getAllServerByUser(userId)

        return res.status(200).json(servers)
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const createNewServerByUser = async (req: Request, res: Response) => {
    try {
        const { userId, name } = req.body
        const file = req.file

        if (!userId) {
            return res.status(404).json({
                status: false,
                message: 'UserId is required',
            })
        }
        if (!name) {
            return res.status(404).json({
                status: false,
                message: 'Name of Server is required',
            })
        }

        if (!file) {
            return res.status(404).json({
                status: false,
                message: 'Image of server is required',
            })
        }

        const imageServer = await uploadFile(file?.path as string)

        const newServer = creatNewServer({
            _id: new mongoose.Types.ObjectId(),
            name,
            imageUrl: imageServer.url,
            userId,
        })

        const member: IMember | null = await getMemberByUser(userId)

        if (!member) {
            const newMember = await creatNewMember({
                serverId: newServer._id,
                userId: userId,
                role: MEMBER_ROLE.ADMIN,
            })
            await updateNewMemberServer(newServer._id, newMember)
            await updateNewServerMember(newMember._id, newServer._id)
        } else {
            await updateNewMemberServer(newServer._id, member)
            await updateNewServerMember(member._id, newServer._id)
        }

        return res.json({
            status: true,
            message: 'Create new server successfully',
            server: newServer,
        })
    } catch (err) {
        return res.status(500).json({
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
            return res.json({
                status: false,
                message: 'Server Id is required',
            })
        }
        const server = await getServerByID(serverId)

        return res.json(server)
    } catch (err) {
        return res.json({
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
        return res.json({
            status: true,
            message: `Update server: ${id} successfully `,
        })
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

// const getAllServerByMember = async (req: Request, res: Response) => {}

export {
    getAllServerByUserId,
    createNewServerByUser,
    getServerById,
    updateServerById,
}
