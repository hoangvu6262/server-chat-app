import { Server } from 'socket.io'

const socketConnection = (server: any) => {
    const io = new Server(server, {
        path: '/api/socket/io',
        addTrailingSlash: false,
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
    })

    global.onlineUsers = new Map<string, string>()
    io.on('connection', (socket) => {
        global.chatSocket = socket

        // add user to the chat room
        socket.on('add-user', (userId) => {
            global.onlineUsers.set(userId, socket.id)
            console.log(`[socket]: Add user suscessfull ${userId}`)
        })

        // user send message
        socket.on('send-msg', (data) => {
            const sendUserSocket = global.onlineUsers.get(data.to)
            if (sendUserSocket) {
                // user recived message
                socket.to(sendUserSocket).emit('msg-recieve', data.msg)
            }
        })
    })
}

export default socketConnection
