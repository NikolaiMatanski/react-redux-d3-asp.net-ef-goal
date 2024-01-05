import classNames from 'classnames';
import { ScaleLinear, line } from 'd3';
import { LineDataPoint } from '../../../../types/DataPoint.type';
import { Margins } from '../../../../types/Margins.type';

type LineProps<T extends LineDataPoint> = {
  data: T[];
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  width: number;
  height: number;
  margin: Partial<Margins>;
  color: `#${string}`;
  className?: string;
  [key: string]: unknown;
} & React.SVGProps<SVGGElement>;

export const Line = <T extends LineDataPoint>({
  className,
  data,
  xScale,
  yScale,
  width,
  height,
  margin,
  color,
  ...rest
}: LineProps<T>) => {
  const lineBuilder = line<LineDataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);

  if (!linePath) {
    return null;
  }

  return (
    <g
      className={classNames('line', {
        [className as string]: className
      })}
      width={width}
      height={height}
      transform={`translate(${margin.left}, ${margin.top})`}
      {...rest}
    >
      <path
        d={linePath}
        opacity={1}
        stroke={color}
        fill="none"
        strokeWidth={2}
      />
    </g>
  );
};
