/** Dependencies **/
import { createSlice } from '@reduxjs/toolkit';

/** Data **/
import JOB_LIST from '../../data/jobs.js';

const initialJobState = { jobs: JOB_LIST };

const jobSlice = createSlice({
  name: 'job',
  initialState: initialJobState,
  reducers: {
    setJobs(state, action) {
      state.job = action.payload;
    },
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice.reducer;
