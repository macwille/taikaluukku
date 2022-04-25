/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import Wish from '../models/wish';

const wishRouter = Router();

wishRouter.get('/', async (_req, res) => {
  const wishes = await Wish.find({});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  res.json(wishes.map(map => map.toJSON()));
});

wishRouter.post('/', async (req, res) => {
  const { name } = req.body;
  if (name) {
    try {
      const newWish = new Wish({ name });
      const savedWish = await newWish.save();
      return res.json(savedWish);
    } catch (e) {
      return res.status(418).json({ error: 'Duplicate Name' });
    }
  }
  return res.status(418).json({ error: 'No name' });
});

wishRouter.delete('/:id', (req, res) => {
  Wish.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(e => console.log(e));
});

export default wishRouter;