import Channel from '../models/channel.model'

const getAllChannelByServer = (serverId: string) => {
    return Channel.find({ serverId })
}

const getChannelByName = (name: string) => {
    return Channel.findOne({ name })
}

const getChannelByID = (id: string) => {
    return Channel.findById(id)
}

const creatNewChannel = (value: Record<string, any>) => {
    return Channel.create(value)
}

const deleteChannel = (id: string) => {
    return Channel.findByIdAndDelete(id)
}

export {
    getChannelByName,
    creatNewChannel,
    deleteChannel,
    getChannelByID,
    getAllChannelByServer,
}
