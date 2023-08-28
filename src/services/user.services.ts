import User from '../models/user.model'

const getUserByID = (id: string) => {
    return User.findById(id)
}

const getUserByUserID = (userId: string) => {
    return User.findOne({ userId })
}

const getUserByName = (username: string) => {
    return User.findOne({ username })
}

const getUserByEmail = (email: string) => {
    return User.findOne({ email })
}

const creatNewUser = (user: Record<string, any>) => {
    return User.create(user)
}

const getAllUsers = (id: string) => {
    return User.find({ _id: { $ne: id } }).select([
        'email',
        'username',
        'avatarImage',
        '_id',
    ])
}

export {
    getUserByID,
    getUserByName,
    getUserByEmail,
    creatNewUser,
    getAllUsers,
    getUserByUserID,
}
