import { IServer } from 'src/const/type.const'
import Server from '../models/server.model'

const getAllServerByUser = (userID: string) => {
    return Server.find((server: IServer) => server.user.userId === userID)
}

const getServerByName = (name: string) => {
    return Server.findOne({ name })
}

const getServerByID = (id: number) => {
    return Server.findById(id)
}

const creatNewServer = (user: Record<string, any>) => {
    return Server.create(user)
}

const deleteServer = (id: string) => {
    return Server.findByIdAndDelete(id)
}

const getServerByUserID = (userID: string) => {
    return Server.findOne((server: IServer) => server.user.userId === userID)
}

export {
    getServerByName,
    creatNewServer,
    deleteServer,
    getServerByID,
    getServerByUserID,
    getAllServerByUser,
}
