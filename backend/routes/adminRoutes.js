import express from 'express';
import { addCourse, addLecture, addUser, getAdmins, getCourses, getInstructors } from '../controllers/adminController.js';


const router = express.Router();

export default router;

router.post('/course', addCourse);
router.get('/getCourse', getCourses);
router.post('/user', addUser);
router.get('/getInstructors', getInstructors); // fitered out users as instructors
router.get('/getAdmins', getAdmins);  // fitered out users as admins
router.post('/lecture', addLecture);