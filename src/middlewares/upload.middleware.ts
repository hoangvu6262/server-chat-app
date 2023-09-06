import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDYNARY_NAME,
    api_key: process.env.CLOUDYNARY_API_KEY,
    api_secret: process.env.CLOUDYNARY_API_SECRET,
})

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const fileStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: (req: Request, file: Express.Multer.File) => 'folder_name',
        format: async (req, file) => {
            // async code using `req` and `file`
            // ...
            return 'jpeg'
        },
        public_id: (req, file) => 'some_unique_id',
    },

    filename: (
        _req: Request,
        file: Express.Multer.File,
        callback: FileNameCallback
    ): void => {
        callback(null, file.originalname)
    },
})

export const fileFilter = (
    _req: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}
