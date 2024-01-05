import { Pie, PieChartProps } from '../Base/Charts/Pie';
import './index.scss';

export const PieChart = ({
  pieData,
  width,
  height,
  margin = { horizontal: 150, vertical: 50 }
}: PieChartProps) => (
  <div className="pie-chart">
    <svg width={width} height={height}>
      <Pie pieData={pieData} width={width} height={height} margin={margin} />
    </svg>
  </div>
);
