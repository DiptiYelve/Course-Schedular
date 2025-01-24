import React, { useEffect, useState } from 'react';
import { getCoursesForInstructor } from '../services/api';

const InstructorDashboard = () => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await getCoursesForInstructor();
        setLectures(response.data);
      } catch (error) {
        console.error('Error fetching lectures');
      }
    };

    fetchLectures();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Instructor Dashboard</h1>
      <ul className="list-group">
        {lectures.map((lecture) => (
          <li key={lecture._id} className="list-group-item">
            {lecture.courseName} - {lecture.batchName} on {new Date(lecture.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorDashboard;