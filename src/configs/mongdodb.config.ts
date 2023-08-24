import mongoose from 'mongoose'
import { mongodbUrl } from '../const/url.const'

const mongodbConnection = () => {
    mongoose
        .connect(mongodbUrl)
        .then(() => {
            console.log('[monggodb]: connection to mongodb successful!')
        })
        .catch((err) => {
            console.log(err)
        })
}

export default mongodbConnection
