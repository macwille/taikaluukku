"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routes/users"));
const videos_1 = __importDefault(require("./routes/videos"));
const wishes_1 = __importDefault(require("./routes/wishes"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const mongoose_1 = __importDefault(require("mongoose"));
const middleware_1 = __importDefault(require("./util/middleware"));
const app = (0, express_1.default)();
mongoose_1.default.connect(config_1.MONGODB_URI)
    .then(() => {
    console.log('connected to MongoDB');
})
    .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
});
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use((0, cors_1.default)());
app.use('/api/users', users_1.default);
app.use('/api/videos', videos_1.default);
app.use('/api/wishes', wishes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, './build/index.html'), (error) => {
        if (error) {
            res.status(500).send(error);
        }
    });
});
app.use(middleware_1.default.unknownEndpoint);
app.listen(config_1.PORT, () => {
    (`Server running on port ${config_1.PORT}`);
});
