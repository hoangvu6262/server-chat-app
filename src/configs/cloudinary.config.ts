import { v2 as cloudinary } from 'cloudinary'
const { CloudinaryStorage } = require('multer-storage-cloudinary')
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDYNARY_NAME,
    api_key: process.env.CLOUDYNARY_API_KEY,
    api_secret: process.env.CLOUDYNARY_API_SECRET,
})

//multipart/form-data
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async () => {
        // async code using `req` and `file`
        // ...
        return {
            folder: 'ChatAppFile',
            allowed_formats: ['jpg', 'png'],
            unique_filename: true,
            public_id: 'some_unique_id',
        }
    },
})

export { storage }
