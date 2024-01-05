import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPieChartData } from '../../../api/charts';
import { IPieChartsState, initialStatePieChartsStore } from './slice';

export const fetchPieCharts = createAsyncThunk('pieCharts/fetchPieChartsAction', async () => {
  const { payload: fetchedPieCharts } = await getPieChartData();
  return fetchedPieCharts;
});

export const resetPieCharts = (state: IPieChartsState) => {
  state.pieCharts = initialStatePieChartsStore.pieCharts;
};
