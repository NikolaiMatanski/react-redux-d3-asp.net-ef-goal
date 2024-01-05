import { RootState } from '../store';
import { initialStateChartsStore } from './slices/charts/slice';
import { initialStatePieChartsStore } from './slices/pieCharts/slice';

export const initialState: RootState = {
  chartsStore: initialStateChartsStore,
  pieChartsStore: initialStatePieChartsStore
};
