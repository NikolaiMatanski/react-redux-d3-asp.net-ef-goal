import { createAsyncThunk } from '@reduxjs/toolkit';
import { getChartData } from '../../../api/charts';
import { IChartsState, initialStateChartsStore } from './slice';

export const fetchCharts = createAsyncThunk('charts/fetchChartsAction', async () => {
  const { payload: fetchedCharts } = await getChartData();
  return fetchedCharts;
});

export const resetCharts = (state: IChartsState) => {
  state.charts = initialStateChartsStore.charts;
};
