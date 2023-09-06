import multer, { FileFilterCallback } from 'multer'
import { storage } from '../configs/cloudinary.config'
import { fileFilter } from '../services/upload.services'

const uploadFile = multer({
    fileFilter,
    storage: storage,
    // key: (_req: Express.Request, _file: Express.Multer.File, cb: FileFilterCallback) => {
    //   cb(null, Date.now().toString());
    //   },
    // }),
})

export { uploadFile }
