import express from 'express';
import { getInstructorLectures } from '../controllers/instructorController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

export default router;

router.get('/', authMiddleware, getInstructorLectures);



