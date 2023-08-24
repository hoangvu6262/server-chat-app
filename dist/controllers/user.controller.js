"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const user_services_1 = require("../services/user.services");
const authentication_helper_1 = require("../helpers/authentication.helper");
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await (0, user_services_1.getUserByName)(username);
        const message = {
            msg: 'Incorrect Username or Password',
            status: false,
        };
        if (!user)
            return res.json(message);
        const isPasswordValid = await (0, authentication_helper_1.isPasswordValidCheck)(password, user.password);
        if (!isPasswordValid)
            return res.json(message);
        return res.json({ status: true, user });
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const usernameCheck = await (0, user_services_1.getUserByName)(username);
        if (usernameCheck)
            return res.json({ msg: 'Username already used', status: false });
        const emailCheck = await (0, user_services_1.getUserByEmail)(email);
        if (emailCheck)
            return res.json({ msg: 'Email already used', status: false });
        const hashedPassword = await (0, authentication_helper_1.hashUserPassword)(password);
        const user = await (0, user_services_1.creatNewUser)({
            email,
            username,
            password: hashedPassword,
        });
        return res.json({ status: true, user });
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.register = register;
//# sourceMappingURL=user.controller.js.map