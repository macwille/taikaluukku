import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routes/users';
import videoRouter from './routes/videos';
import wishRouter from './routes/wishes';
import path from 'path';
import { PORT, MONGODB_URI } from './config';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use(express.json());
app.use(bodyParser.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use('/api/users', userRouter);
app.use('/api/videos', videoRouter);
app.use('/api/wishes', wishRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'), (error) => {
    if (error) {
      res.status(500).send(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});