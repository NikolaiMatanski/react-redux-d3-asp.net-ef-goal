export type PieLabelProps = {
  centroid: [number, number];
  inflectionPoint: [number, number];
  color?: `#${string}`;
  position: 'left' | 'right';
  labelXPosition: number;
  label: string;
};

export const PieLabel = ({
  centroid,
  inflectionPoint,
  position,
  labelXPosition,
  color,
  label
}: PieLabelProps) => {
  const isRightPositioned = position === 'right';
  const textAnchor = isRightPositioned ? 'start' : 'end';

  return (
    <>
      <circle cx={centroid[0]} cy={centroid[1]} r={2} fill={color} />
      <line
        x1={centroid[0]}
        y1={centroid[1]}
        x2={inflectionPoint[0]}
        y2={inflectionPoint[1]}
        stroke={color}
      />
      <line
        x1={inflectionPoint[0]}
        y1={inflectionPoint[1]}
        x2={labelXPosition}
        y2={inflectionPoint[1]}
        stroke={color}
      />
      <text
        x={labelXPosition + (isRightPositioned ? 2 : -2)}
        y={inflectionPoint[1]}
        textAnchor={textAnchor}
        dominantBaseline="middle"
        fontSize={14}
        fill={color}
      >
        {label}
      </text>
    </>
  );
};
