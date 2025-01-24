import React from 'react';
import CourseForm from '../componants/courseForm';
import LectureForm from '../componants/lectureForm'; 
import InstructorList from '../componants/instructorList';
import CoursesList from '../componants/courseList';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <CourseForm />
      <LectureForm />
      <InstructorList/>
      <CoursesList/>
    </div>
  );
};

export default AdminDashboard;
