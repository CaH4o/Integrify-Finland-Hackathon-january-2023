import express from 'express';
import { registerUser } from '../controllers/user.controller';

const router = express.Router();

// POST /users/register
router.post('/register', registerUser);

export default router;
