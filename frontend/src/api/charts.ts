import axiosInstance from '../axios';
import { GeneralChart } from '../types/store/GeneralChart.type';
import { PieChart } from '../types/store/PieChart.type';

export const getChartData = () => axiosInstance.get<GeneralChart[]>('/general-chart');

export const getPieChartData = () => axiosInstance.get<PieChart[]>('/pie-chart');
