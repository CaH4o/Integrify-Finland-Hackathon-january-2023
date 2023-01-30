import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & {
  avatar: string;
  name: string;
  position: string;
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default: 'public/images/users/default.svg',
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [2, 'Name must be at least 2 characters'],
    trim: true,
  },
  position: {
    type: String,
    minLength: [2, 'Position must be at least 2 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
  },
});

export default mongoose.model<UserDocument>('User', userSchema);
