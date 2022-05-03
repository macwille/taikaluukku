"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN = exports.REDIRECT_URI = exports.SECRET = exports.CLIENT_SECRET = exports.CLIENT_ID = exports.API_KEY = exports.MONGODB_URI = exports.PORT = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.PORT = process.env.PORT || 3001;
exports.MONGODB_URI = process.env.MONGODB_URI || 'no env file';
exports.API_KEY = process.env.API_KEY || 'no api key';
exports.CLIENT_ID = process.env.CLIENT_ID || 'no client id';
exports.CLIENT_SECRET = process.env.CLIENT_SECRET || ' no client secret';
exports.SECRET = process.env.SECRET || 'no secret found';
exports.REDIRECT_URI = process.env.REDIRECT_URI || 'https://localhost:3001';
exports.REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'no token';
