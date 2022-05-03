import { google } from 'googleapis';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } from '../config';

const driveClient = () => {

  const oauth2Client = new google.auth.OAuth2({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
  });

  oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      oauth2Client.setCredentials({ refresh_token: tokens.refresh_token, });
    } else {
      oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN, });
    }
  });

  return google.drive({ version: 'v3', auth: oauth2Client, });

};

export default driveClient;