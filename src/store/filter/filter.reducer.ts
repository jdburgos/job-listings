/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Interfaces **/
import { IFilter } from '../../interfaces/filter.interface';

export interface FiltersState {
  filters: IFilter[];
}

const initialFilterState: FiltersState = { filters: [] };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilters(state: FiltersState, action: PayloadAction<string>) {
      state.filters = [...state.filters, { name: action.payload }];
    },
    removeFilter(state: FiltersState, action: PayloadAction<number>) {
      state.filters = [...state.filters.filter((filter, index) => action.payload !== index)];
    },
    removeFilters(state: FiltersState) {
      state.filters = [];
    },
  },
});

export const { setFilters, removeFilter, removeFilters } = filterSlice.actions;

export default filterSlice.reducer;
