import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import JobPostings from '../Admin/Jobposting';
// import { fetchJobs, setSearchTerm, setLocationFilter, setContractFilter, applyForJob } from '../slices/jobsSlice';

const UsserJobsListingPage = () => {
  const dispatch = useDispatch();
 const status= "succeeded"
   const { jobs, searchTerm, locationFilter, contractFilter, statu, error } = useSelector((state) => state.jobs);

//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   const handleApply = (jobId) => {
//     dispatch(applyForJob(jobId));
//   };
  const dummyJobsData = [
    {
      id: 1,
      companyName: 'Tech Innovations',
      position: 'Software Engineer',
      location: 'New York',
      contractType: 'Full Time',
      salary: '$100,000',
    },
    {
      id: 2,
      companyName: 'Creative Solutions',
      position: 'Graphic Designer',
      location: 'San Francisco',
      contractType: 'Part Time',
      salary: '$60,000',
    },
    {
      id: 3,
      companyName: 'Future Enterprises',
      position: 'Data Analyst',
      location: 'New York',
      contractType: 'Full Time',
      salary: '$90,000',
    },
    {
      id: 4,
      companyName: 'Green Energy',
      position: 'Project Manager',
      location: 'San Francisco',
      contractType: 'Full Time',
      salary: '$120,000',
    },
    {
      id: 5,
      companyName: 'Innovative Systems',
      position: 'Marketing Specialist',
      location: 'New York',
      contractType: 'Part Time',
      salary: '$70,000',
    },
    {
      id: 6,
      companyName: 'NextGen Technologies',
      position: 'UX Designer',
      location: 'San Francisco',
      contractType: 'Part Time',
      salary: '$65,000',
    },
  ];
  

//   const filteredJobs = jobs
//     .filter((job) => job.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
//     .filter((job) => (locationFilter ? job.location === locationFilter : true))
//     .filter((job) => (contractFilter ? job.contractType === contractFilter : true));

  return (
    // <div className="p-6 bg-blue-700">
    //    <div className="flex  justify-between  mb-4 outline-none">
    //     <input
    //       type="text"
    //       placeholder="Search by company name"
    //     //   onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    //       className="p-2 border rounded w-full md:w-1/3 outline-none"
    //     />
    //     <select
    //     //   onChange={(e) => dispatch(setLocationFilter(e.target.value))}
    //       className="p-2 border rounded w-full md:w-1/3 outline-none "
    //     >
    //       <option  value="">Filter by location</option>
    //       <option value="New York">New York</option>
    //       <option value="San Francisco">San Francisco</option>
    //     </select>
    //     <select
    //     //   onChange={(e) => dispatch(setContractFilter(e.target.value))}
    //       className="p-2 border rounded w-full md:w-1/3 outline-none"
    //     >
    //       <option value="">Filter by contract</option>
    //       <option value="Full Time">Full Time</option>
    //       <option value="Part Time">Part Time</option>
    //     </select>
    //   </div>

    //   {status === 'loading' && <p>Loading...</p>}
    //   {status === 'failed' && <p>Error: {error}</p>}
    //   {status === 'succeeded' && (
    //     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
    //       {dummyJobsData.map((job) => (
    //         <div key={job.id} className="border p-4 rounded shadow flex ">
    //           <img src={`https://via.placeholder.com/150?text=${job.companyName}`} alt="Job" className="w-1/2 h-33 object-cover mb-2" />
    //           <div className='ml-4'>    <h2 className="text-xl font-bold">{job.companyName}</h2>
    //           <p>{job.position}</p>
    //           <p>{job.location}</p>
    //           <p>{job.contractType}</p>
    //           <button
    //             // onClick={() => handleApply(job.id)}
    //             className="bg-red-900 text-white p-2 rounded mt-2"
    //           >
    //             Apply
    //           </button> </div>
           
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    <div class="flex h-screen bg-gray-50  overflow-y-auto">
  <div class="flex-1 flex flex-col overflow-hidden">
  <Header/>
   
    
    {/* <!-- Main Content --> */}
    <div class="flex h-full bg-gray-50">
      
      {/* <!-- Left Sidebar (User Profile) --> */}
      {/* <nav class="flex w-1/4 h-full ">
        <div class="w-full flex mx-auto px-6 py-8">
          <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl bg-green-500  ">User Profile</div>
        </div>
      </nav> */}
      
      {/* <!-- Job Listings --> */}
      {/* <main class="flex flex-col w-1/2 bg-gray-50 overflow-x-hidden  ">
        <div class="flex w-full mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full text-gray-900 text-xl  ">
            {/* <!-- Job Postings --> */}
            {/* <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto  border-b ">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {dummyJobsData.map((job) => (
            <div key={job.id} className="border p-4 rounded shadow flex flex-col ">
              <img src={`https://via.placeholder.com/150?text=${job.companyName}`} alt="Job" className="w-1/2 h-33 object-cover mb-2" />
               <div className='ml-4'>    <h2 className="text-xl font-bold">{job.companyName}</h2>
              <p>{job.position}</p>
             <p>{job.location}</p>
              <p>{job.contractType}</p>
              <button
                // onClick={() => handleApply(job.id)}
                 className="bg-red-900 text-white p-2 rounded mt-2"
               >
                 Apply
              </button> </div>
           
             </div>
          ))}
        </div>
            </div>
         
          </div>
        </div>
      </main> */} 
      <JobPostings></JobPostings>
     
      {/* <nav class="flex w-1/4 h-full  bg-gray-50">
        <div class="w-full flex mx-auto px-6 py-8">
            -
          <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl ">Additional Content</div>
        </div> */}
      {/* </nav> */}
      
    </div>
  </div>
</div>

  );
};

export default UsserJobsListingPage;
