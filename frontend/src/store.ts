import {
  combineReducers, configureStore
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { chartsReducer as charts } from './store/slices/charts/slice';
import { pieChartsReducer as pieCharts } from './store/slices/pieCharts/slice';

export const store = configureStore({
  reducer: { chartsStore: charts, pieChartsStore: pieCharts },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  chartsStore: charts,
  pieChartsStore: pieCharts
});

export type AppStoreState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStoreState> = useSelector;
