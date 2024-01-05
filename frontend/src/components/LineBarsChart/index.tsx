import { LineDataPoint } from '../../types/DataPoint.type';
import { Margins } from '../../types/Margins.type';
import { Axes } from '../Base/Charts/Axes';
import { Bars } from '../Base/Charts/Bars';
import { Line } from '../Base/Charts/Line';
import { getBarScalesAndBins, getLineScales } from '../utils/charts';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 40,
  left: 50
} satisfies Margins;
const BAR_TICKS_COUNT = 70;
const BAR_PADDING = -20;

type BarsChartProps = {
  lineData: LineDataPoint[];
  barsData: number[];
  width: number;
  height: number;
  margin?: Margins;
};

export const LineBarsChart = ({
  lineData,
  barsData,
  width,
  height,
  margin = MARGIN
}: BarsChartProps) => {
  const boundsWidth = width - margin.right - margin.left;
  const boundsHeight = height - margin.top - margin.bottom;

  const {
    xScale: barsXScale,
    yScale: barsYScale,
    bars
  } = getBarScalesAndBins(barsData, boundsWidth, boundsHeight, BAR_TICKS_COUNT);

  const { xScale: lineXScale, yScale: lineYScale } = getLineScales(
    lineData,
    boundsWidth,
    boundsHeight
  );

  return (
    <div className="bar-chart">
      <svg width={width} height={height}>
        <Bars
          bars={bars}
          xScale={barsXScale}
          yScale={barsYScale}
          width={boundsWidth}
          height={boundsHeight}
          barPadding={BAR_PADDING}
          margin={margin}
          color="#69b3a2"
        />

        <Line
          data={lineData}
          xScale={lineXScale}
          yScale={lineYScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
          color="#9a6fb0"
        />

        <Axes
          xScale={barsXScale}
          yScale={barsYScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
          color="#69b3a2"
        />
      </svg>

      <svg width={width} height={height}>
        <Bars
          bars={bars}
          xScale={barsXScale}
          yScale={barsYScale}
          width={boundsWidth}
          height={boundsHeight}
          barPadding={BAR_PADDING}
          margin={margin}
          color="#69b3a2"
        />

        <Line
          data={lineData}
          xScale={lineXScale}
          yScale={lineYScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
          color="#9a6fb0"
        />

        <Axes
          xScale={lineXScale}
          yScale={lineYScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
          color="#9a6fb0"
        />
      </svg>
    </div>
  );
};
