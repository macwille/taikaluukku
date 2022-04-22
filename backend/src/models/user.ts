/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  name: string;
  passwordHash: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  passwordHash: String
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;