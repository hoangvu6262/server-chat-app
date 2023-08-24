"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashUserPassword = exports.isPasswordValidCheck = void 0;
const bcrypt = require('bcrypt');
const isPasswordValidCheck = async (password, userPassword) => await bcrypt.compare(password, userPassword);
exports.isPasswordValidCheck = isPasswordValidCheck;
const hashUserPassword = (password) => bcrypt.hash(password, 10);
exports.hashUserPassword = hashUserPassword;
//# sourceMappingURL=authentication.helper.js.map