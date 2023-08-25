import { Server } from 'socket.io'

const socketConnection = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
    })

    global.onlineUsers = new Map<string, string>()
    io.on('connection', (socket) => {
        global.chatSocket = socket
        socket.on('add-user', (userId) => {
            global.onlineUsers.set(userId, socket.id)
            console.log(`[socket]: Add user suscessfull ${userId}`)
        })
        socket.on('send-msg', (data) => {
            const sendUserSocket = onlineUsers.get(data.to)
            if (sendUserSocket) {
                socket.to(sendUserSocket).emit('msg-recieve', data.msg)
            }
        })
    })
}

export default socketConnection
