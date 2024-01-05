import classNames from 'classnames';
import { Bin, ScaleLinear } from 'd3';
import { uid } from 'uid';
import { Margins } from '../../../../types/Margins.type';
import { Bar } from '../Bar';

type BarsChartProps = {
  bars: Array<Bin<number, number>>;
  width: number;
  height: number;
  margin: Margins;
  barPadding: number;
  color: `#${string}`;
  className?: string;
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
};

export const Bars = ({
  bars,
  xScale,
  yScale,
  width,
  height,
  margin,
  barPadding,
  color,
  className
}: BarsChartProps) => (
  <g
    className={classNames('bars', {
      [className as string]: className
    })}
    width={width}
    height={height}
    transform={`translate(${margin.left}, ${margin.top})`}
  >
    {bars.map((bar) => (
      <Bar
        key={uid()}
        x0ScaleLower={xScale(bar.x0 ?? 0)}
        x1ScaleUpper={xScale(bar.x1 ?? 0)}
        yScale={yScale(bar.length)}
        barPadding={barPadding}
        barMaxHeight={height}
        color={color}
      />
    ))}
  </g>
);
