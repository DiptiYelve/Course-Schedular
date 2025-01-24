import React, { useEffect, useState } from 'react';
import { getInstructors } from '../services/api';

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await getInstructors();
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors');
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Instructors List</h2>
      <ul className="list-group">
        {instructors.map((instructor) => (
          <li key={instructor._id} className="list-group-item">
            {instructor.name}
            {instructor.lectures}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorList;