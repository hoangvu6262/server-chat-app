import { Request, Response } from 'express'
import { IMember } from '../const/type.const'

import {
    getAllMemberByServer,
    creatNewMember,
    getMemberByID,
    deleteMember,
} from '../services/member.services'

const getAllMemberServer = async (req: Request, res: Response) => {
    try {
        const { serverId } = req.params

        if (!serverId) {
            res.json({
                status: false,
                message: 'ServerId are required',
            })
        }

        const Members: IMember[] = await getAllMemberByServer(serverId)

        res.json(Members)
    } catch (err) {
        res.json({
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
            res.json({
                status: false,
                message: 'Id is required',
            })
        }
        const Member: IMember | null = await getMemberByID(id)
        res.json(Member)
    } catch (err) {
        res.json({
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
            res.json({
                status: false,
                message: 'Id is required',
            })
        }
        await deleteMember(id)
        res.json({
            status: true,
            message: `Delete member: ${id} successfully `,
        })
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const addNewMember = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            res.json({
                status: false,
                message: 'Body data is required',
            })
        }

        const server = await creatNewMember(body)

        res.json(server)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export { getAllMemberServer, addNewMember, getMemberById, deleteMemberById }
