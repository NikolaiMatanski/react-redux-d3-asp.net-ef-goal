import { LineDataPoint, PieDataPoint } from '../types/DataPoint.type';

export const lineData = [
  { x: 1, y: 90 },
  { x: 2, y: 12 },
  { x: 3, y: 34 },
  { x: 4, y: 53 },
  { x: 5, y: 52 },
  { x: 6, y: 9 },
  { x: 7, y: 18 },
  { x: 8, y: 78 },
  { x: 9, y: 28 },
  { x: 10, y: 34 }
] satisfies LineDataPoint[];

export const barsData = [1, 2, 2, 2, 3, 4, 5, 6, 6, 8, 9];

export const combinedLineData = [
  { x: 1, y: 3 },
  { x: 2, y: 9 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
  { x: 5, y: 3 },
  { x: 6, y: 6 },
  { x: 7, y: 0 },
  { x: 8, y: 3 },
  { x: 9, y: 3 },
  { x: 10, y: 0 }
] satisfies LineDataPoint[];

export const pieData = [
  {
    name: 'Mark',
    value: 90,
    color: '#e0ac2b',
    labelColor: '#cccccc'
  },
  {
    name: 'Robert',
    value: 12,
    color: '#e85252',
    labelColor: '#cccccc'
  },
  {
    name: 'Emily',
    value: 34,
    color: '#6689c6',
    labelColor: '#cccccc'
  },
  {
    name: 'Alex',
    value: 53,
    color: '#9a6fb0',
    labelColor: '#cccccc'
  },
  {
    name: 'Jean',
    value: 58,
    color: '#a53253',
    labelColor: '#cccccc'
  }
] satisfies PieDataPoint[];
