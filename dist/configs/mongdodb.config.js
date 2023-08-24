"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url_const_1 = require("../const/url.const");
const mongodbConnection = () => {
    mongoose_1.default
        .connect(url_const_1.mongodbUrl)
        .then(() => {
        console.log('[monggodb]: connection to mongodb successful!');
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.default = mongodbConnection;
//# sourceMappingURL=mongdodb.config.js.map