/* eslint-disable @typescript-eslint/no-misused-promises */
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } from '../config';
import { Router } from 'express';
import { google } from 'googleapis';

const videoRouter = Router();

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

videoRouter.get('/', async (_req, res) => {
  const result = await drive.files.list();
  res.send(result.data);
});

videoRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (id === "test") {
    res.redirect('/test');
  }
  const result = await drive.files.get(
    { fileId: id }
  );
  res.send(result.data);
});

export default videoRouter;