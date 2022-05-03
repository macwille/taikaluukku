import { Request, Response } from 'express';

const unknownEndpoint = (_e: Error, _req: Request, res: Response) => {
  if (_e) {
    res.status(404).send({ error: _e.message, status: 404 });
  }
  res.status(404).send({ error: 'unknown endpoint', status: 404 });
};

export default { unknownEndpoint };