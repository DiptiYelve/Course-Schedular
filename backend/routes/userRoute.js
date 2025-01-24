import express from 'express';
import { loginUser } from '../controllers/userController.js';

const router = express.Router();

export default router;

router.post('/login', loginUser);