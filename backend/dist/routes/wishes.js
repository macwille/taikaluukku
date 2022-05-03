"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
const wish_1 = __importDefault(require("../models/wish"));
const wishRouter = (0, express_1.Router)();
wishRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishes = yield wish_1.default.find({});
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    res.json(wishes.map(map => map.toJSON()));
}));
wishRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    if (name) {
        try {
            const newWish = new wish_1.default({ name });
            const savedWish = yield newWish.save();
            return res.json(savedWish);
        }
        catch (e) {
            return res.status(418).json({ error: 'Duplicate Name' });
        }
    }
    return res.status(418).json({ error: 'No name' });
}));
wishRouter.delete('/:id', (req, res) => {
    wish_1.default.findByIdAndRemove(req.params.id)
        .then(() => {
        res.status(204).end();
    })
        .catch(e => console.log(e));
});
exports.default = wishRouter;
