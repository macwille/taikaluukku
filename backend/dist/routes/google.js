"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const config_1 = require("../config");
const driveClient = () => {
    const oauth2Client = new googleapis_1.google.auth.OAuth2({
        clientId: config_1.CLIENT_ID,
        clientSecret: config_1.CLIENT_SECRET,
        redirectUri: config_1.REDIRECT_URI,
    });
    oauth2Client.on('tokens', (tokens) => {
        if (tokens.refresh_token) {
            oauth2Client.setCredentials({ refresh_token: tokens.refresh_token, });
        }
        else {
            oauth2Client.setCredentials({ refresh_token: config_1.REFRESH_TOKEN, });
        }
    });
    return googleapis_1.google.drive({ version: 'v3', auth: oauth2Client, });
};
exports.default = driveClient;
