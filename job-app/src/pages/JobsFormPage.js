import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../reducers/jobs/jobsSlice'; // Assuming you have a jobsSlice for managing job-related state

const JobsFormPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [contract, setContract] = useState('');
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob({ companyName, position, contract, location }));
    setCompanyName('');
    setPosition('');
    setContract('');
    setLocation('');

  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter Position"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Contract Type</label>
        <input
          type="text"
          value={contract}
          onChange={(e) => setContract(e.target.value)}
          placeholder="Enter Contract Type (e.g., Full-time, Part-time)"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  </div>

  );
};

export default JobsFormPage;
