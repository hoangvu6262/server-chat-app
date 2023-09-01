import { Request, Response } from 'express'
import { IChannel } from '../const/type.const'

import {
    getAllChannelByServer,
    creatNewChannel,
    getChannelByID,
} from '../services/channel.services'

const getAllChannelServer = async (req: Request, res: Response) => {
    try {
        const { serverId } = req.params

        if (!serverId) {
            res.json({
                status: false,
                message: 'ServerId are required',
            })
        }

        const channels: IChannel[] = await getAllChannelByServer(serverId)

        res.json(channels)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const getChannelById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        if (!id) {
            res.json({
                status: false,
                message: 'Id is required',
            })
        }
        const channel: IChannel | null = await getChannelByID(id)
        res.json(channel)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const addNewChannel = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            res.json({
                status: false,
                message: 'Body data is required',
            })
        }

        const server = await creatNewChannel(body)

        res.json(server)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export { getAllChannelServer, addNewChannel, getChannelById }
