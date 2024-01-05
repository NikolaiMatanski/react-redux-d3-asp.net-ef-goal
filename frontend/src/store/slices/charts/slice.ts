import { createSlice } from '@reduxjs/toolkit';
import { GeneralChart } from '../../../types/store/GeneralChart.type';
import { resetStoreActionMatcher } from '../../shared';
import {
  fetchCharts as fetchChartsAction,
  resetCharts as resetChartsAction
} from './actions';

export interface IChartsState {
  charts: GeneralChart[];
  isLoading: boolean;
}

const initialState: IChartsState = {
  charts: [],
  isLoading: true
};

export { initialState as initialStateChartsStore };

export const { reducer: chartsReducer, actions: chartsActions } = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    resetCharts: resetChartsAction
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChartsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChartsAction.fulfilled, (state, { payload: fetchedCharts }) => {
      state.charts = fetchedCharts;
      state.isLoading = false;
    });
    builder.addMatcher(resetStoreActionMatcher, () => initialState);
  }
});

export const { resetCharts } = chartsActions;
