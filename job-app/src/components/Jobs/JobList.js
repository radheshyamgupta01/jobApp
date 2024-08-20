import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../reducers/jobs/jobSlice';
import JobItem from './JobItem';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, status } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs());
    }
  }, [status, dispatch]);

  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
