"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const authRoute = (router) => {
    router.post('/auth/register', user_controller_1.register);
    router.get('/auth/allusers/:id', user_controller_1.getAllUsersInRoom);
    router.get('/auth/logout/:id', user_controller_1.logOut);
};
exports.default = authRoute;
//# sourceMappingURL=auth.route.js.map