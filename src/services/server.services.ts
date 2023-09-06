import Server from '../models/server.model'

const getAllServerByUser = (userId: string) => {
    return Server.find({
        userId,
    })
}

const getServerByName = (name: string) => {
    return Server.findOne({ name })
}

const getServerByID = (id: string) => {
    return Server.findById(id)
}

const creatNewServer = (server: Record<string, any>) => {
    return Server.create(server)
}

const deleteServer = (id: string) => {
    return Server.findByIdAndDelete(id)
}

const updateServer = (server: Record<string, any>, id: string) => {
    return Server.findByIdAndUpdate(id, server, { new: true })
}

export {
    getServerByName,
    creatNewServer,
    deleteServer,
    getServerByID,
    getAllServerByUser,
    updateServer,
}
