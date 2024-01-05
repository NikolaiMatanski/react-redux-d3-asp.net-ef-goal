import { CSSProperties, useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import { BarsChart } from '../../components/BarsChart';
import { LineChart } from '../../components/LineChart';
import { PieChart } from '../../components/PieChart';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCharts, selectChartsState } from '../../store/slices/charts';
import {
  fetchPieCharts,
  selectPieChartsState
} from '../../store/slices/pieCharts';

const width = 700;
const height = 400;

const Home = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const {
    isLoading: isGeneralChartStateLoading,
    charts: [firstChart]
  } = useAppSelector(selectChartsState);
  const {
    isLoading: isPieChartStateLoading,
    pieCharts: [firstPieChart]
  } = useAppSelector(selectPieChartsState);

  const renderLoading = () => (
    <CircleLoader
      cssOverride={{ display: 'inline-block' } satisfies CSSProperties}
      color="#36d7b7"
    />
  );

  const renderLineChart = () => (isLoading || isGeneralChartStateLoading ? (
    renderLoading()
  ) : (
    <LineChart lineData={firstChart.chart} width={width} height={height} />
  ));

  const renderBarChart = () => (isLoading || isGeneralChartStateLoading ? (
    renderLoading()
  ) : (
    <BarsChart
      barsData={firstChart.chart.map((chart) => chart.y)}
      width={width}
      height={height}
    />
  ));

  const renderPieChart = () => (isLoading || isPieChartStateLoading ? (
    renderLoading()
  ) : (
    <PieChart pieData={firstPieChart.chart} width={width} height={height} />
  ));

  useEffect(() => {
    const fetchGeneralCharts = async () => {
      await dispatch(fetchCharts()).unwrap(); // with unwrap
      setIsLoading(false);
    };

    fetchGeneralCharts();
    dispatch(fetchPieCharts()); // without unwrap
  }, [dispatch]);

  return (
    <div className="home">
      <div>{renderLineChart()}</div>

      <div>{renderBarChart()}</div>

      <div>{renderPieChart()}</div>
    </div>
  );
};

export default Home;
