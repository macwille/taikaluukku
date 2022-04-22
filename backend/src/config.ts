import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const MONGODB_URI = process.env.MONGODB_URI || 'no env file';
export const API_KEY = process.env.API_KEY || 'no api key';
export const CLIENT_ID = process.env.CLIENT_ID || 'no client id';
export const CLIENT_SECRET = process.env.CLIENT_SECRET || ' no client secret';
export const SECRET = process.env.SECRET || 'no secret found';
export const REDIRECT_URI = process.env.REDIRECT_URI || 'https://localhost:3001';
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'no token';
