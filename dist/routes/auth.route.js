"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const authRoute = (router) => {
    router.post('/auth/login', user_controller_1.login);
    router.post('/auth/register', user_controller_1.register);
};
exports.default = authRoute;
//# sourceMappingURL=auth.route.js.map