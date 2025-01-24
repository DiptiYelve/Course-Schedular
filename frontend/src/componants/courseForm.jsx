import React, { useState } from 'react';
import { addCourse } from '../services/api';

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: '',
    level: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(course);
      alert('Course added successfully!');
    } catch (error) {
      alert('Error adding course!');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Course Name"
            value={course.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">Level</label>
          <input
            type="text"
            className="form-control"
            name="level"
            placeholder="Level"
            value={course.level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Description"
            value={course.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Image URL"
            value={course.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
