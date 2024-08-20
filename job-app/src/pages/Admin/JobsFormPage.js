import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addJob } from '../reducers/jobs/jobsSlice'; // Assuming you have a jobsSlice for managing job-related state

const JobsFormPage = () => {
  const addJob="123456"
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
    <section className="flex flex-col lg:flex-row h-screen bg-gray-100">
    <div className="hidden lg:block lg:w-1/2 h-full flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-white px-6 lg:px-16 xl:px-12">
      <div className="w-full max-w-md">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mb-6 text-blue-700">Post a New Job</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter Position"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contract Type</label>
            <input
              type="text"
              value={contract}
              onChange={(e) => setContract(e.target.value)}
              placeholder="Enter Contract Type (e.g., Full-time, Part-time)"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-600 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Post Job
          </button>
        </form>

        

       
      </div>
    </div>
  </section>



  );
};

  export default JobsFormPage;



  


