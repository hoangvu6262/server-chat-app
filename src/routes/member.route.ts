import { Router } from 'express'
import {
    getAllMemberServer,
    addNewMember,
    getMemberById,
    deleteMemberById,
} from '../controllers/member.controller'

const memberRoute = (router: Router) => {
    router.get('/member/server/:serverId', getAllMemberServer)
    router.get('/member/:id', getMemberById)
    router.post('/member', addNewMember)
    router.delete('/member/:id', deleteMemberById)
}

export default memberRoute
