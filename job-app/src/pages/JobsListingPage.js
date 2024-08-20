import React from 'react';
import { useSelector } from 'react-redux';

const JobsListingPage = () => {
//   const jobs = useSelector((state) => state.jobs.jobs); 

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Salary</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="border border-gray-300 px-4 py-2">{job.title}</td>
              <td className="border border-gray-300 px-4 py-2">{job.location}</td>
              <td className="border border-gray-300 px-4 py-2">{job.salary}</td>
              <td className="border border-gray-300 px-4 py-2">
                {/* Add actions here (e.g., edit, delete) */}
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-1 px-3 rounded-lg">Edit</button>
                <button className="bg-red-500 hover:bg-red-400 text-white py-1 px-3 rounded-lg ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsListingPage;
