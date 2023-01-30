import mongoose from 'mongoose';
import dev from '.';

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(dev.db.url);
    console.log('Database is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDatabase };
