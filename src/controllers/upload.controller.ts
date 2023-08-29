import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDYNARY_NAME,
    api_key: process.env.CLOUDYNARY_API_KEY,
    api_secret: process.env.CLOUDYNARY_API_SECRET,
})

const uploadFile = (path: string) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        foler: 'Server',
        transformation: [{ width: 400, height: 400, crop: 'scale' }],
    }

    return cloudinary.uploader.upload(path, options)
}

export { uploadFile }
