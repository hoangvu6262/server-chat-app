import { Request, Response } from 'express'
// import { IMessage } from '../const/type.const'
import { getAllMessages, addMessage } from '../services/message.services'

const getMessages = async (req: Request, res: Response) => {
    try {
        const { from, to } = req.body

        const messages = await getAllMessages(from, to)

        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message,
            }
        })
        res.json(projectedMessages)
    } catch (err) {
        throw new Error(err.message)
    }
}

const createMessage = async (req: Request, res: Response) => {
    try {
        const { from, to, message } = req.body
        const data = await addMessage({
            message: { text: message },
            users: [from, to],
            sender: from,
        })

        if (data) return res.json({ msg: 'Message added successfully.' })
        else return res.json({ msg: 'Failed to add message to the database' })
    } catch (err) {
        throw new Error(err.message)
    }
}

export { getMessages, createMessage }
