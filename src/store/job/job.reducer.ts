/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Data **/
import JOB_LIST from '../../data/jobs';

/** Interfaces **/
import { IJob } from '../../interfaces/job.interface';

interface JobsState {
  jobs: IJob[];
}

const initialJobState: JobsState = { jobs: JOB_LIST };

const jobSlice = createSlice({
  name: 'job',
  initialState: initialJobState,
  reducers: {
    setJobs(state: JobsState, action: PayloadAction<IJob[]>) {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = jobSlice.actions;

export default jobSlice.reducer;
