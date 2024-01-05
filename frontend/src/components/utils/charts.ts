import {
  ScaleLinear,
  axisBottom,
  axisLeft,
  bin,
  extent, scaleLinear
} from 'd3';
import { LineDataPoint } from '../../types/DataPoint.type';

// line utils

export const getLineScales = <T extends LineDataPoint>(
  data: T[],
  width: number,
  height: number
) => {
  const [_yMin, yMax] = extent(data, (d) => d.y);
  const yScale = scaleLinear()
    .domain([0, yMax || 0])
    .range([height, 0]);

  const [_xMin, xMax] = extent(data, (d) => d.x);
  const xScale = scaleLinear()
    .domain([0, xMax || 0])
    .range([0, width]);

  return {
    xScale,
    yScale
  };
};

export const getAxesByScales = <T extends ScaleLinear<number, number, never>>(
  xScale: T,
  yScale: T
) => {
  const xAxisGenerator = axisBottom(xScale);
  const yAxisGenerator = axisLeft(yScale);

  return {
    xAxisGenerator,
    yAxisGenerator
  };
};

// bar utils

export const getBarScalesAndBins = (
  data: number[],
  width: number,
  height: number,
  barTicksCount: number
) => {
  const xMax = Math.max(...data);

  const xScale = scaleLinear()
    .domain([0, Math.min(xMax + 1, 1000)])
    .range([10, width]);

  const barGenerator = bin()
    .value((d) => d)
    .domain(xScale.domain() as [number, number])
    .thresholds(xScale.ticks(barTicksCount));
  const bars = barGenerator(data);

  const yMax = Math.max(...bars.map((bar) => bar?.length));
  const yScale = scaleLinear().range([height, 0]).domain([0, yMax]);

  return {
    xScale, yScale, bars
  };
};
