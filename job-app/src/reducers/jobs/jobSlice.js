import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching jobs
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get('/api/jobs'); // Replace with your backend API endpoint
  return response.data;
});

// Async thunk for applying for a job
export const applyForJob = createAsyncThunk('jobs/applyForJob', async (jobId) => {
  const response = await axios.post(`/api/jobs/${jobId}/apply`); // Replace with your backend API endpoint
  return response.data;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    appliedJobs: [],
    status: 'idle',
    error: null,
    searchTerm: '',
    locationFilter: '',
    contractFilter: '',
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setLocationFilter(state, action) {
      state.locationFilter = action.payload;
    },
    setContractFilter(state, action) {
      state.contractFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.appliedJobs.push(action.payload);
      });
  },
});

export const { setSearchTerm, setLocationFilter, setContractFilter } = jobsSlice.actions;

export default jobsSlice.reducer;
