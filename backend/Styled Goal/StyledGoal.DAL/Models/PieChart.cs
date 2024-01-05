namespace StyledGoal.DAL.Models
{
    public class PieChart
    {
        public int Id { get; private set; }

        public List<PieChartDataPoint>? Chart { get; private set; } = default;


        private PieChart() { }

        public PieChart(List<PieChartDataPoint> chart)
        {
            Chart = chart;
        }

        public void UpdatePieChart(List<PieChartDataPoint>? chart)
        {
            Chart = chart;
        }
    }
}

