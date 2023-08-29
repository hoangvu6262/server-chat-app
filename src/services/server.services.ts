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

const creatNewServer = (user: Record<string, any>) => {
    return Server.create(user)
}

const deleteServer = (id: string) => {
    return Server.findByIdAndDelete(id)
}

export {
    getServerByName,
    creatNewServer,
    deleteServer,
    getServerByID,
    getAllServerByUser,
}
