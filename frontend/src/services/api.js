import axios from 'axios';

// Base URL for your API (Update with your actual API URL)
const BASE_URL = 'http://localhost:5000/api';


// Function to fetch instructors
export const getCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/getCourse`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses', error);
    throw error;
  }
};


// Function to fetch instructors
export const getInstructors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/getInstructors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching instructors', error);
    throw error;
  }
};


// Function to fetch courses for the instructor (if applicable)
export const getCoursesForInstructor = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/instructor`);
    return response.data;
  } catch (error) {
    console.error('Error fetching instructor courses', error);
    throw error;
  }
};

// Function to add a new course (example)
export const addCourse = async (courseData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/course`, courseData);
    return response.data;
  } catch (error) {
    console.error('Error adding course', error);
    throw error;
  }
};

// Function to add a new lecture (example)
export const addLecture = async (lectureData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/lecture`, lectureData);
    return response.data;
  } catch (error) {
    console.error('Error adding lecture', error);
    throw error;
  }
};

// Login function
export const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error during login', error);
      throw error;
    }
  };
