/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import driveClient from './google';

const videoRouter = Router();
const drive = driveClient();

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