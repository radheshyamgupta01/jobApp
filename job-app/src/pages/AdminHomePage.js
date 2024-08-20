import React from 'react';
import JobForm from '../components/Jobs/JobForm';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleNavigate('/admin/jobs-form')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go to Jobs Form
        </button>
        <button
          onClick={() => handleNavigate('/admin/jobs-listing')}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Go to Jobs Listing
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;

