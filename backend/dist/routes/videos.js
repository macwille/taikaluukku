"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const config_1 = require("../config");
const express_1 = require("express");
const googleapis_1 = require("googleapis");
const videoRouter = (0, express_1.Router)();
const oauth2Client = new googleapis_1.google.auth.OAuth2(config_1.CLIENT_ID, config_1.CLIENT_SECRET, config_1.REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: config_1.REFRESH_TOKEN });
const drive = googleapis_1.google.drive({
    version: 'v3',
    auth: oauth2Client,
});
videoRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield drive.files.list();
    res.send(result.data);
}));
videoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id === "test") {
        res.redirect('/test');
    }
    const result = yield drive.files.get({ fileId: id });
    res.send(result.data);
}));
exports.default = videoRouter;
