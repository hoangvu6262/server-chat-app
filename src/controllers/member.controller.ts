import { Request, Response } from 'express'
import { updateNewMemberServer } from '../services/server.services'
import { IMember } from '../const/type.const'

import {
    getAllMemberByServer,
    creatNewMember,
    getMemberByID,
    deleteMember,
    getMemberByUser,
    updateNewServerMember,
} from '../services/member.services'

const getMemberByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        if (!userId) {
            return res.json({
                status: false,
                message: 'userId are required',
            })
        }

        const member: IMember | null = await getMemberByUser(userId)

        return res.json(member)
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const getAllMemberServer = async (req: Request, res: Response) => {
    try {
        const { serverId } = req.params

        if (!serverId) {
            return res.json({
                status: false,
                message: 'ServerId are required',
            })
        }

        const members: IMember[] = await getAllMemberByServer(serverId)

        return res.json(members)
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const getMemberById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.json({
                status: false,
                message: 'Id is required',
            })
        }
        const member: IMember | null = await getMemberByID(id)
        return res.json(member)
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const deleteMemberById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.json({
                status: false,
                message: 'Id is required',
            })
        }
        await deleteMember(id)
        return res.json({
            status: true,
            message: `Delete member: ${id} successfully `,
        })
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const addNewMember = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const serverId = body.serverId

        if (!body) {
            return res.json({
                status: false,
                message: 'Body data is required',
            })
        }

        const member: IMember | null = await getMemberByUser(body.userId)

        if (member) {
            return res.json({
                status: false,
                message: 'Meber has already existed in server',
            })
        }

        const newMember = await creatNewMember(body)
        await updateNewMemberServer(serverId, newMember)
        await updateNewServerMember(newMember._id, serverId)

        return res.json(newMember)
    } catch (err) {
        return res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export {
    getAllMemberServer,
    addNewMember,
    getMemberById,
    deleteMemberById,
    getMemberByUser,
    getMemberByUserId,
}
