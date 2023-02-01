import { Request, Response } from 'express';
import Task from '../models/Task';

// POST /tasks/create

export const createTask = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    // get data from request body
    const { title, assigned, description, priority } = req.body;

    // assign data to task model
    const task = new Task({
      title,
      assigned,
      description,
      priority,
    });

    // save to database
    const newTask = await task.save();

    // send success response
    return res.status(200).send({
      success: true,
      message: 'Task createed',
      task: newTask,
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};
