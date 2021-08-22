/** Dependencies **/
import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = { filters: [] };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilters(state, action) {
      state.filters = [...state.filters, { name: action.payload }];
    },
    removeFilter(state, action) {
      state.filters = [...state.filters.filter((filter, index) => action.payload !== index)];
    },
    removeFilters(state) {
      state.filters = [];
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
