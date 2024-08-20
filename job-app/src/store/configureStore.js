import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authSlice';
import jobReducer from '../reducers/jobs/jobSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
  },
});

export default store;
