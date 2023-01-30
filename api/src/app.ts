import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/db';
import dev from './config';

const app = express();

// global middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// run server
app.listen(dev.app.port, async () => {
  console.log(`Server is running at http://localhost:${dev.app.port}`);
  await connectDatabase();
});
