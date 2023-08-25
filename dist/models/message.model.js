"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageModel = new mongoose_1.Schema({
    message: {
        text: { type: String, required: true },
    },
    users: Array,
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Message', messageModel);
//# sourceMappingURL=message.model.js.map