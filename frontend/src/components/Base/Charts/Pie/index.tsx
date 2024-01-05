import classNames from 'classnames';
import { arc, pie } from 'd3';
import { useMemo, useRef, useState } from 'react';
import { uid } from 'uid';
import { PieDataPoint } from '../../../../types/DataPoint.type';
import { Margins } from '../../../../types/Margins.type';
import { PieLabel } from '../PieLabel';
import './index.scss';

export type PieChartProps = {
  pieData: PieDataPoint[];
  width: number;
  height: number;
  margin?: Partial<Margins>;
  className?: string;
};

const LABEL_PADDING = 20;

export const Pie = ({
  width,
  height,
  pieData,
  margin,
  className
}: PieChartProps) => {
  const ref = useRef<SVGGElement>(null);

  const [isHighlighted, setIsHighlighted] = useState(false);

  const radius = Math.min(
    width - 2 * Number(margin?.horizontal),
    height - 2 * Number(margin?.vertical)
  ) / 2;

  const pieChart = useMemo(() => {
    const pieGenerator = pie<unknown, PieDataPoint>().value((d) => d.value);
    return pieGenerator(pieData);
  }, [pieData]);

  const arcGenerator = arc();

  const shapes = pieChart.map(
    (
      {
        startAngle,
        endAngle,
        value,
        data: { name, color, labelColor = '#000' }
      },
      index
    ) => {
      const sliceInfo = {
        innerRadius: 0,
        outerRadius: radius,
        startAngle,
        endAngle
      };

      // pie slice center
      const centroid = arcGenerator.centroid(sliceInfo);
      const slicePath = arcGenerator(sliceInfo);

      const inflectionInfo = {
        innerRadius: radius + LABEL_PADDING,
        outerRadius: radius + LABEL_PADDING,
        startAngle,
        endAngle
      };

      // pie slice offset center for legend
      const inflectionPoint = arcGenerator.centroid(inflectionInfo);

      const isRightLabel = inflectionPoint[0] > 0;
      const labelXPosition = inflectionPoint[0] + 50 * (isRightLabel ? 1 : -1);
      const label = `${name} (${value})`;

      return (
        <g
          key={uid()}
          data-testid={`slice-${index + 1}`}
          className="pie__slice"
          onMouseEnter={() => {
            setIsHighlighted(true);
          }}
          onMouseLeave={() => {
            setIsHighlighted(false);
          }}
        >
          <path d={slicePath as string} fill={color} />
          <PieLabel
            centroid={centroid}
            inflectionPoint={inflectionPoint}
            color={labelColor}
            position={isRightLabel ? 'right' : 'left'}
            labelXPosition={labelXPosition}
            label={label}
          />
        </g>
      );
    }
  );

  return (
    <g
      transform={`translate(${width / 2}, ${height / 2})`}
      data-testid="pie"
      className={classNames('pie', {
        'pie--highlighted': isHighlighted,
        [className as string]: className
      })}
      ref={ref}
    >
      {shapes}
    </g>
  );
};
