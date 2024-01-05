import { Margins } from '../../types/Margins.type';
import { Axes } from '../Base/Charts/Axes';
import { Bars } from '../Base/Charts/Bars';
import { getBarScalesAndBins } from '../utils/charts';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 40,
  left: 50
} satisfies Margins;
const BAR_TICKS_COUNT = 70;
const BAR_PADDING = 1;

type BarsChartProps = {
  barsData: number[];
  width: number;
  height: number;
  margin?: Margins;
};

export const BarsChart = ({
  barsData,
  width,
  height,
  margin = MARGIN
}: BarsChartProps) => {
  const boundsWidth = width - margin.right - margin.left;
  const boundsHeight = height - margin.top - margin.bottom;

  const { xScale, yScale, bars } = getBarScalesAndBins(
    barsData,
    boundsWidth,
    boundsHeight,
    BAR_TICKS_COUNT
  );

  return (
    <div className="bar-chart">
      <svg width={width} height={height}>
        <Bars
          bars={bars}
          xScale={xScale}
          yScale={yScale}
          width={boundsWidth}
          height={boundsHeight}
          barPadding={BAR_PADDING}
          margin={margin}
          color="#69b3a2"
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
