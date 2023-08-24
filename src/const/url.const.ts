import dotenv from 'dotenv'
dotenv.config()

const mongodbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.r6t762t.mongodb.net/chat-app?retryWrites=true&w=majority`

export { mongodbUrl }
