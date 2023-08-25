import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import mongodbConnection from './configs/mongdodb.config'
import socketConnection from './configs/socketio.config'
import router from './routes/root.route'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
mongodbConnection()
app.use('/api', router())

const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

socketConnection(server)
