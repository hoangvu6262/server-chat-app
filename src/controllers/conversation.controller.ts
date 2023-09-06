import { Request, Response } from 'express'
import { IConversation } from '../const/type.const'

import {
    creatNewConversation,
    getConversationByID,
} from '../services/Conversation.services'

const getConversationById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        if (!id) {
            res.json({
                status: false,
                message: 'Id is required',
            })
        }
        const Conversation: IConversation | null = await getConversationByID(id)
        res.json(Conversation)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

const addNewConversation = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            res.json({
                status: false,
                message: 'Body data is required',
            })
        }

        const server = await creatNewConversation(body)

        res.json(server)
    } catch (err) {
        res.json({
            status: false,
            message: 'Something went wrong',
            err: err.message,
        })
    }
}

export { addNewConversation, getConversationById }
