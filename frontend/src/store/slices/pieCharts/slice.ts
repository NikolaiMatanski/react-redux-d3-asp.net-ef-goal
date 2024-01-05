import { createSlice } from '@reduxjs/toolkit';
import { PieChart } from '../../../types/store/PieChart.type';
import { resetStoreActionMatcher } from '../../shared';
import {
  fetchPieCharts as fetchPieChartsAction,
  resetPieCharts as resetPieChartsAction
} from './actions';

export interface IPieChartsState {
  pieCharts: PieChart[];
  isLoading: boolean;
}

const initialState: IPieChartsState = {
  pieCharts: [],
  isLoading: false
};

export { initialState as initialStatePieChartsStore };

export const { reducer: pieChartsReducer, actions: pieChartsActions } = createSlice({
  name: 'pieCharts',
  initialState,
  reducers: {
    resetPieCharts: resetPieChartsAction
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPieChartsAction.pending, (state) => {
      state.isLoading = true;
    }); builder.addCase(fetchPieChartsAction.fulfilled, (state, { payload: fetchedPieCharts }) => {
      state.pieCharts = fetchedPieCharts;
      state.isLoading = false;
    });

    builder.addMatcher(resetStoreActionMatcher, () => initialState);
  }
});

export const { resetPieCharts } = pieChartsActions;
