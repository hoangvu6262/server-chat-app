"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersInRoom = exports.logOut = exports.register = void 0;
const user_services_1 = require("../services/user.services");
const upload_controller_1 = require("./upload.controller");
const register = async (req, res) => {
    try {
        const { username, email, avatarImage, userId } = req.body;
        const emailCheck = await (0, user_services_1.getUserByEmail)(email);
        if (emailCheck)
            return res.json({ msg: 'Email already used', status: false });
        const imageUser = await (0, upload_controller_1.uploadFile)(avatarImage);
        const user = await (0, user_services_1.creatNewUser)({
            email,
            username,
            avatarImage: imageUser.url,
            userId,
        });
        return res.json({ status: true, user });
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.register = register;
const logOut = (req, res) => {
    try {
        if (!req.params.id)
            return res.json({ msg: 'User id is required ' });
        global.onlineUsers.delete(req.params.id);
        return res.status(200).send();
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.logOut = logOut;
const getAllUsersInRoom = async (req, res) => {
    try {
        const users = await (0, user_services_1.getAllUsers)(req.params.id);
        return res.json(users);
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.getAllUsersInRoom = getAllUsersInRoom;
//# sourceMappingURL=user.controller.js.map