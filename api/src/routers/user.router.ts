import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  checkUserLogin,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/user.controller';

const router = express.Router();

// register user
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

// check login
router.get('/check-login', checkUserLogin);

// logout user
router.get('/logout', logoutUser);

// get all users
router.get('/', getAllUsers);

// get user by id
router.get('/:userId', getUserById);

// update user by id
router.put('/:userId', updateUserById);

// delete by id
router.delete('/:userId', deleteUserById);

export default router;
