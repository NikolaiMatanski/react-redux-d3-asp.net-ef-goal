import classNames from 'classnames';
import { ScaleLinear, select } from 'd3';
import { useEffect, useRef } from 'react';
import { Margins } from '../../../../types/Margins.type';
import { getAxesByScales } from '../../../utils/charts';

type AxesProps = {
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  width: number;
  height: number;
  margin: Partial<Margins>;
  color?: `#${string}` | 'none';
  className?: string;
  [key: string]: unknown;
} & React.SVGProps<SVGGElement>;

export const Axes = ({
  xScale,
  yScale,
  width,
  height,
  margin,
  color = 'none',
  className,
  ...rest
}: AxesProps) => {
  const axesRef = useRef(null);
  const { xAxisGenerator, yAxisGenerator } = getAxesByScales(xScale, yScale);

  useEffect(() => {
    const axesElement = select(axesRef.current);
    axesElement.selectAll('*').remove();
    axesElement
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(xAxisGenerator);

    axesElement.append('g').call(yAxisGenerator);
  }, [height, xAxisGenerator, yAxisGenerator]);

  return (
    <g
      className={classNames('axes', {
        [className as string]: className
      })}
      width={width}
      height={height}
      color={color}
      ref={axesRef}
      transform={`translate(${margin.left}, ${margin.top})`}
      {...rest}
    />
  );
};
