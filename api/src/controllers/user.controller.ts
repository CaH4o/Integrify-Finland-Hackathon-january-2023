import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { comparePassword, encryptPassword } from '../util/securePassword';

// POST /users/register

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get data from request body
    const { email, password } = req.body;

    // check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).send({
        success: false,
        error: 'User with this email address already exists',
      });

    // encrypt password
    const hashPassword = await encryptPassword(password);

    // assign data to user model
    const user = new User({
      email,
    });

    // svae to database
    await user.save();

    // send success response
    return res.status(200).send({
      success: true,
      message: 'User registered',
      user,
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};
