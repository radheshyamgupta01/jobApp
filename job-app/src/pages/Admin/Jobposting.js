import React from 'react';

// Sample data for job postings
const dummyJobsData = [
  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 2, companyName: 'Company B', position: 'Product Manager', location: 'San Francisco', contractType: 'Part Time' },
  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 2, companyName: 'Company B', position: 'Product Manager', location: 'San Francisco', contractType: 'Part Time' },  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 2, companyName: 'Company B', position: 'Product Manager', location: 'San Francisco', contractType: 'Part Time' },
  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 2, companyName: 'Company B', position: 'Product Manager', location: 'San Francisco', contractType: 'Part Time' },  { id: 1, companyName: 'Company A', position: 'Software Engineer', location: 'New York', contractType: 'Full Time' },
  { id: 2, companyName: 'Company B', position: 'Product Manager', location: 'San Francisco', contractType: 'Part Time' },
];

const JobPostings = () => {
  return (
    <main className="flex flex-col w-full bg-gray-50  overflow-y-auto ">
      <div className="flex w-full mx-auto px-6 py-8">
        <div className="flex flex-col w-full h-full text-gray-900 text-xl">
          {/* Job Postings */}
          <div className="w-full max-w-screen-xl mx-auto border-b">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
              {dummyJobsData.map((job) => (
                <div key={job.id} className="border p-4 rounded shadow-lg flex flex-col bg-white">
                  <img
                    src={`https://via.placeholder.com/150?text=${job.companyName}`}
                    alt="Job"
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{job.companyName}</h2>
                    <p className="text-sm text-gray-600">{job.position}</p>
                    <p className="text-sm text-gray-600">{job.location}</p>
                    <p className="text-sm text-gray-600">{job.contractType}</p>
                    <button
                      // onClick={() => handleApply(job.id)}
                      className="bg-red-900 text-white p-2 rounded mt-4 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobPostings;
