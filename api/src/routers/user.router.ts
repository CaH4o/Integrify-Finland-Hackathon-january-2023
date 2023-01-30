import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/user.controller';

const router = express.Router();

// POST /users/register
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

// get all users
router.get('/', getAllUsers);

// get user by id
router.get('/:userId', getUserById);

// update user by id
router.put('/:userId', updateUserById);

// delete by id
router.delete('/:userId', deleteUserById);

export default router;
