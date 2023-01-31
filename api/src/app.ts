import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/db';
import dev from './config';
import userRouter from './routers/user.router';
import taskRouter from './routers/task.router';

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

// set up routers
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);

// run server
app.listen(dev.app.port, async () => {
  console.log(`Server is running at http://localhost:${dev.app.port}`);
  await connectDatabase();
});
