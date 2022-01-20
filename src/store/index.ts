/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import filterReducer from './filter/filter.reducer';
import jobReducer from './job/job.reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    job: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
