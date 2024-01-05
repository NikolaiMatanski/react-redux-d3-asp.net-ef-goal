import { LineDataPoint } from '../../types/DataPoint.type';
import { Margins } from '../../types/Margins.type';
import { Axes } from '../Base/Charts/Axes';
import { Line } from '../Base/Charts/Line';
import { getLineScales } from '../utils/charts';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 50,
  left: 50
} satisfies Margins;

type LineChartProps = {
  lineData: LineDataPoint[];
  width: number;
  height: number;
  margin?: Margins;
};

export const LineChart = ({
  lineData,
  width,
  height,
  margin = MARGIN
}: LineChartProps) => {
  const boundsWidth = width - margin.right - margin.left;
  const boundsHeight = height - margin.top - margin.bottom;

  const { xScale, yScale } = getLineScales(lineData, boundsWidth, boundsHeight);

  return (
    <div className="line-chart">
      <svg width={width} height={height}>
        <Line
          data={lineData}
          xScale={xScale}
          yScale={yScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
          color="#9a6fb0"
        />

        <Axes
          xScale={xScale}
          yScale={yScale}
          width={boundsWidth}
          height={boundsHeight}
          margin={margin}
        />
      </svg>
    </div>
  );
};
