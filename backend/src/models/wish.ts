/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';

interface IWish extends mongoose.Document {
  name: string;
}

const wishSchema = new mongoose.Schema<IWish>({
  name: String
});

wishSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const Wish = mongoose.model<IWish>('Wish', wishSchema);

export default Wish;