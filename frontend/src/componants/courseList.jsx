import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/api';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Course List</h2>
      <ul className="list-group">
        {courses.map((courses) => (
          <li key={courses._id} className="list-group-item">
            {courses.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;