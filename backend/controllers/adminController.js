import Course from '../models/courseModel.js';
import User from '../models/userModel.js';
import InstructorAvailability from '../models/InstructorAvailabilityMode.js';
import Lecture from '../models/lectureModel.js';
import bcrypt from 'bcryptjs';


//Create Course
export const addCourse = async (req, res) => {
  const { name, level, description, image } = req.body;
  
  if(!name || !level || !description || !image){
    return res.status(400).json({ success: false, message: "All Fields Are Required!"});
  }
  try {
    const newCourse = new Course({
      name,
      level,
      description,
      image,
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error adding course' });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(201).json({ success: true, data: courses });
  } catch (err) {
    console.error("Error in fetching courses: ", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
};

// Add new user
export const addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Validate required fields
  if (!name || !email || !password || !role) {
    return res.status(400).json({
      success: false,
      message: "All Fields Are Required! (name, email, password, role)"
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    console.error("Error in fetching users: ", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all instuctors
export const getInstructors = async (req, res) => {
  try {
    const instructors = await User.find({ role: 'instructor' });
    res.status(200).json({ success: true, data: instructors });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching instructors' });
  }
};

// Get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });
    res.status(200).json( {success: true, data: admins});
  } catch (error) {
    res.status(500).json({ error: 'Error fetching admins' });
  }
};

export const addLecture = async (req, res) => {
  const { course_id, instructor_id, date, batch_number } = req.body;

  // Step 1: Check for missing required fields
  if (!course_id || !instructor_id || !date || !batch_number) {
    return res.status(400).json({ error: 'All fields are required: course_id, instructor_id, date, batch_number' });
  }

  // Step 2: Check if the instructor is already assigned to another lecture on this date
  const existingLecture = await Lecture.findOne({ instructor_id, date });
  if (existingLecture) {
    return res.status(400).json({ error: 'Instructor is already assigned to a lecture on this date' });
  }

  // Step 3: Create a new lecture
  const newLecture = new Lecture({
    course_id,
    instructor_id,
    date,
    batch_number,
  });

  try {
    // Save the new lecture
    await newLecture.save();

    // Step 4: Update the Course's lectures field (adding the new lecture's ID)
    const course = await Course.findById(course_id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Add the new lecture to the course's lectures array
    course.lectures.push(newLecture._id);
    await course.save(); // Save the updated course

    // Step 5: Create or update the instructor's availability
    const newSchedule = new InstructorAvailability({
      instructorId: instructor_id,
      date,
      assignedCourseId: course_id,
    });

    await newSchedule.save();

    res.status(201).json(newLecture); // Return the newly created lecture
  } catch (error) {
    console.error('Error adding lecture:', error);
    res.status(500).json({ error: 'Error saving lecture' });
  }
};


