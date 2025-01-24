// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import AdminDashboard from './pages/adminDashboard';
import InstructorDashboard from './pages/instructorDashboard';
import Login from './pages/login';

 const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/instructorDashboard" element={<InstructorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
