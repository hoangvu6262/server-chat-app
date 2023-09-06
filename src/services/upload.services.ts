import { FileFilterCallback } from 'multer'

const fileFilter = (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true)
    } else {
        cb(new Error())
    }
}

export { fileFilter }
