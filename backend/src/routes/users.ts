/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */


import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';
import { SECRET } from '../config';

const userRouter = Router();

userRouter.get('/', (_req: Request, res: Response) => {
  res.send('Fetching all users!');
});

userRouter.post('/', async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  const correct = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash);

  if (!(user && correct)) {
    return res.status(401).json({ error: 'Wrong credentials' });
  }
  const userForToken = {
    name: user.name,
    id: user._id
  };

  const token = jwt.sign(userForToken, SECRET, { expiresIn: 6000 * 60 });
  return res.status(200).json({ token, name: user.name });
});

export default userRouter;