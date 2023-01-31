import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & {
  nameFirst: string;
  nameLast: string;
  email: string;
  position: string;
  company: string;
  avatar: string;
  phone: string;
  bio: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  nameFirst: {
    type: String,
    minLength: [2, 'First name must be at least 2 characters'],
    maxLength: [50, 'First name must be at most 50 characters'],
    trim: true,
  },
  nameLast: {
    type: String,
    minLength: [2, 'Last name must be at least 2 characters'],
    maxLength: [50, 'Last name must be at most 50 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxLength: [50, 'Email must be at most 50 characters'],
    unique: true,
    lowercase: true,
  },
  position: {
    type: String,
    minLength: [2, 'Position must be at least 2 characters'],
    maxLength: [100, 'Position must be at most 100 characters'],
    trim: true,
  },
  company: {
    type: String,
    minLength: [2, 'Company must be at least 2 characters'],
    maxLength: [100, 'Company must be at most 100 characters'],
    trim: true,
  },
  avatar: {
    type: String,
  },
  phone: {
    type: String,
    minLength: [6, 'Phone number must be at least 6 characters'],
    maxLength: [20, 'Phone number must be at most 20 characters'],
    trim: true,
  },
  bio: {
    type: String,
    maxLength: [500, 'Bio must be at most 500 characters'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
  },
});

export default mongoose.model<UserDocument>('User', userSchema);
