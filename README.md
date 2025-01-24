# Course Scheduler

A **MERN stack** based course scheduling application that allows admins to manage courses, lectures, and instructor assignments efficiently. The system ensures there are no scheduling conflicts for instructors and provides separate panels for both admins and instructors.

## Features

### Admin Panel:
- **View List of Instructors and courses**: Admin can view the list of all instructors, all courses.
- **Add Courses**: Admin can create new courses. 
- **Assign Lectures to Instructors**: 
  - Admin can assign a lecture to an instructor with a particular date.
  - Ensures that the same instructor is not assigned multiple lectures on the same date.
- **Lecture Scheduling Conflict Prevention**: The backend ensures that no two lectures are scheduled for the same instructor on the same date.
  - If an instructor is already assigned a lecture on a particular date, the system will prevent further assignments for that date.
- **Course & Instructor Assignment**: When a course is created, the admin can assign specific lectures to instructors with the desired date.

### Instructor Panel:
- **View Assigned Lectures**: Instructors can view a list of all lectures assigned to them along with the course name and dates.
- **Stay Updated**: Instructors can easily keep track of their schedules and upcoming lectures.

## Tech Stack:
- **Frontend**: React + Vite, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
