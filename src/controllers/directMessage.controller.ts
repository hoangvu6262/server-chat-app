import { Request, Response } from 'express'
import { IDirectMessage } from '../const/type.const'

import {
    getAllDirectMessByConversation,
    creatNewDirectMessage,
    getDirectMessageByID,
} from '../services/DirectMessage.services'

const getAllDirectMessageConversationId = async (
    req: Request,
    res: Response
) => {
    try {
        const { conversationId } = req.params

        if (!conversationId) {
            res.json({
                status: false,
                message: 'ConversationId are required',
            })
        }

        const DirectMessages: IDirectMessage[] =
            await getAllDirectMessByConversation(conversationId)

        res.json(DirectMessages)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const getDirectMessageById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        if (!id) {
            res.json({
                status: false,
                message: 'Id is required',
            })
        }
        const DirectMessage: IDirectMessage | null = await getDirectMessageByID(
            id
        )
        res.json(DirectMessage)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const addNewDirectMessage = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            res.json({
                status: false,
                message: 'Body data is required',
            })
        }

        const server = await creatNewDirectMessage(body)

        res.json(server)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export {
    getAllDirectMessageConversationId,
    addNewDirectMessage,
    getDirectMessageById,
}
