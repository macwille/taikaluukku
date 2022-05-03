"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const config_1 = require("../config");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (_req, res) => {
    res.send('Fetching all users!');
});
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    const user = yield user_1.default.findOne({ name });
    const correct = user === null
        ? false
        : yield bcrypt_1.default.compare(password, user.passwordHash);
    if (!(user && correct)) {
        return res.status(401).json({ error: 'Wrong credentials' });
    }
    const userForToken = {
        name: user.name,
        id: user._id
    };
    const token = jsonwebtoken_1.default.sign(userForToken, config_1.SECRET, { expiresIn: 6000 * 60 });
    return res.status(200).json({ token, name: user.name });
}));
exports.default = userRouter;
