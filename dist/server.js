"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongdodb_config_1 = __importDefault(require("./configs/mongdodb.config"));
const socketio_config_1 = __importDefault(require("./configs/socketio.config"));
const root_route_1 = __importDefault(require("./routes/root.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, mongdodb_config_1.default)();
app.use('/api', (0, root_route_1.default)());
const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
(0, socketio_config_1.default)(server);
//# sourceMappingURL=server.js.map