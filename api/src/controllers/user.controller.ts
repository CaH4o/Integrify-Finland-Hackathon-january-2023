import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dev from '../config';
import User from '../models/User';
import { comparePassword, encryptPassword } from '../util/securePassword';

// POST /users/register

export const registerUser = async (req: Request, res: Response) => {
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
      password: hashPassword,
    });

    // save to database
    const newUser = await user.save();

    // send success response
    return res.status(200).send({
      success: true,
      message: 'User registered',
      user: { email: newUser.email, _id: newUser._id },
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// POST /users/login

export const loginUser = async (req: Request, res: Response) => {
  try {
    // get data from request body
    const { email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).send({
        success: false,
        error: "User with this email doesn't exist",
      });

    // compare password
    const isPasswordMatched = await comparePassword(
      password,
      existingUser.password
    );

    if (!isPasswordMatched) {
      return res.status(401).send({
        success: false,
        error: "Email or password didn't match",
      });
    }

    // sign access token
    const accessToken = jwt.sign(
      { _id: existingUser._id },
      String(dev.jwt.access),
      {
        expiresIn: '30m',
      }
    );

    // set access cookie
    res.cookie(String(existingUser._id), accessToken, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 29),
      httpOnly: true,
      sameSite: 'lax',
    });

    // send success response
    return res.status(200).send({
      success: true,
      message: 'Login successful',
      accessToken,
      user: existingUser,
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// GET /users/check-login

export const checkUserLogin = async (req: Request, res: Response) => {
  try {
    // check if there is a cookie in request headers
    if (!req.headers.cookie) {
      return res.status(401).json({
        success: false,
        error: 'User is not logged in',
      });
    }

    // get token from cookie
    const token = req.headers.cookie.split('=')[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        error: 'No token found',
      });
    }

    // verify token
    const verify = jwt.verify(token, String(dev.jwt.access));
    if (!verify) {
      return res.status(401).send({
        success: false,
        error: 'Token not valid',
      });
    }

    // send success response
    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// GET /users/logout

export const logoutUser = async (req: Request, res: Response) => {
  try {
    // check if cookie exists
    if (!req.headers.cookie) {
      return res.status(404).send({
        success: false,
        message: 'No cookie found',
      });
    }

    // check if token exists
    const token = req.headers.cookie.split('=')[1];

    if (!token) {
      return res.status(404).send({
        success: false,
        message: 'No token found',
      });
    }

    // decode jwt token
    const { _id } = jwt.decode(token) as JwtPayload;

    // delete cookie
    res.clearCookie(`${_id}`);

    // send success response
    return res.status(200).send({
      success: true,
      message: 'User logged out',
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// GET /users

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // find all users
    const users = await User.find().select({ password: 0 });

    // send success response
    res.status(200).send({ success: true, users });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// GET /users/:userId

export const getUserById = async (req: Request, res: Response) => {
  try {
    // find user by id
    const user = await User.findById(req.params.userId).select({ password: 0 });

    // send success response
    res.status(200).send({ success: true, user });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// PUT /users/:userId

export const updateUserById = async (req: Request, res: Response) => {
  try {
    // get data from request body
    const update = req.body;

    // find user by id and update
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      update,
      { new: true }
    ).select({ password: 0 });
    if (!updatedUser)
      return res.status(404).send({
        success: false,
        error: 'User not found',
      });

    // send success response
    res.status(200).send({
      success: true,
      message: 'User successfully updated',
      updatedUser,
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};

// DELETE /users/:userId

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    // find user by id and delete
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser)
      return res.status(404).send({
        success: false,
        error: 'User not found',
      });

    // send success response
    return res.status(200).send({
      success: true,
      message: 'User has been deleted',
    });
  } catch (error) {
    // handle error
    return res.status(500).send({
      success: false,
      error: 'Server error',
    });
  }
};
