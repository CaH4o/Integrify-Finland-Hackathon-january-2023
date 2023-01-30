import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller';

const router = express.Router();

// POST /users/register
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

export default router;
