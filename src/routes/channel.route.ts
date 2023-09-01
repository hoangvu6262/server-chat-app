import { Router } from 'express'
import {
    getAllChannelServer,
    addNewChannel,
    getChannelById,
} from '../controllers/channel.controller'

const channelRoute = (router: Router) => {
    router.get('/channel/server/:serverId', getAllChannelServer)
    router.get('/channel/:id', getChannelById)
    router.post('/channel', addNewChannel)
}

export default channelRoute
