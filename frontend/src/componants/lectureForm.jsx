import React, { useState, useEffect } from 'react';
import { getInstructors, getCourses, addLecture } from '../services/api'; // Ensure getCourses is defined in your API

const LectureForm = () => {
  const [lectures, setLectures] = useState({
    course_id: '',
    instructor_id: '',
    date: '',
    batch_number: '',
  });
  const [instructors, setInstructors] = useState([]);  
  const [courses, setCourses] = useState([]);          

  // To fetch instructors and courses data
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await getInstructors();
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await getCourses();  
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchInstructors();
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectures((prevLectures) => ({
      ...prevLectures,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLecture(lectures);
      alert('Lecture added successfully!');
    } catch (error) {
      alert('This instructor already has a lecture scheduled for the selected date!');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Assign Lecture to Instructor</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        
        {/* Course Selection */}
        <div className="mb-3">
          <label htmlFor="course_id" className="form-label">Select Course</label>
          <select
            className="form-select"
            name="course_id"
            value={lectures.course_id}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            {courses && courses.length > 0 && courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Instructor Selection */}
        <div className="mb-3">
          <label htmlFor="instructor_id" className="form-label">Select Instructor</label>
          <select
            className="form-select"
            name="instructor_id"
            value={lectures.instructor_id}
            onChange={handleChange}
          >
            <option value="">Select Instructor</option>
            {instructors && instructors.length > 0 && instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Batch Number */}
        <div className="mb-3">
          <label htmlFor="batch_number" className="form-label">Batch Number</label>
          <input
            type="text"
            className="form-control"
            name="batch_number"
            placeholder="Batch Number"
            value={lectures.batch_number}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Lecture Date</label>
          <input
            type="datetime-local"
            className="form-control"
            name="date"
            value={lectures.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Assign Lecture</button>
      </form>
    </div>
  );
};

export default LectureForm;
