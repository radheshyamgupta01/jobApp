import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JobsFormPage from './pages/Admin/JobsFormPage';
import JobsListingPage from './pages/Admin/JobsListingPage';
import UsserJobsListingPage from './pages/User/UserPage';


const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<SignupPage />} /> 
    <Route path="/user" element={<UserHomePage />} />
    <Route path="/admin" element={<AdminHomePage />} />
    <Route path="/login" element={<LoginPage />} /> 
    <Route path="/admin/jobs-form" element={<JobsFormPage />} />
    <Route path="/jobs" element={<UsserJobsListingPage />} />
    <Route path="/admin/jobs-listing" element={<JobsListingPage />} />

    </Routes>
  </Router>
);

export default App;
