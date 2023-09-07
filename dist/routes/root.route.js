"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const server_route_1 = __importDefault(require("./server.route"));
const channel_route_1 = __importDefault(require("./channel.route"));
const conversation_route_1 = __importDefault(require("./conversation.route"));
const directMessage_route_1 = __importDefault(require("./directMessage.route"));
const member_route_1 = __importDefault(require("./member.route"));
const router = express_1.default.Router();
exports.default = () => {
    (0, auth_route_1.default)(router);
    (0, server_route_1.default)(router);
    (0, channel_route_1.default)(router);
    (0, conversation_route_1.default)(router);
    (0, directMessage_route_1.default)(router);
    (0, member_route_1.default)(router);
    return router;
};
//# sourceMappingURL=root.route.js.map