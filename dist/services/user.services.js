"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUserID = exports.getAllUsers = exports.creatNewUser = exports.getUserByEmail = exports.getUserByName = exports.getUserByID = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getUserByID = (id) => {
    return user_model_1.default.findById(id);
};
exports.getUserByID = getUserByID;
const getUserByUserID = (userId) => {
    return user_model_1.default.findOne({ userId });
};
exports.getUserByUserID = getUserByUserID;
const getUserByName = (username) => {
    return user_model_1.default.findOne({ username });
};
exports.getUserByName = getUserByName;
const getUserByEmail = (email) => {
    return user_model_1.default.findOne({ email });
};
exports.getUserByEmail = getUserByEmail;
const creatNewUser = (user) => {
    return user_model_1.default.create(user);
};
exports.creatNewUser = creatNewUser;
const getAllUsers = (id) => {
    return user_model_1.default.find({ _id: { $ne: id } }).select([
        'email',
        'username',
        'avatarImage',
        '_id',
    ]);
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.services.js.map