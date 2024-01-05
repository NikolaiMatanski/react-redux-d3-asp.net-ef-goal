type BarChartProps = {
  barPadding: number;
  barMaxHeight: number;
  x0ScaleLower: number;
  x1ScaleUpper: number;
  yScale: number;
  color: `#${string}`;
};

export const Bar = ({
  barPadding,
  barMaxHeight,
  x0ScaleLower,
  x1ScaleUpper,
  yScale,
  color
}: BarChartProps) => (
  <rect
    fill={color}
    x={x0ScaleLower + barPadding / 2}
    width={Math.max(0, x1ScaleUpper - x0ScaleLower - barPadding)}
    y={yScale}
    height={barMaxHeight - yScale}
  />
);
