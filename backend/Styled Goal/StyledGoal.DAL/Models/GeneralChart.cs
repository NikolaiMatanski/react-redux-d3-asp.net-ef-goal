namespace StyledGoal.DAL.Models
{
    public class GeneralChart
    {
        public int Id { get; private set; }

        public List<ChartDataPoint>? Chart { get; private set; } = default;


        private GeneralChart() { }

        public GeneralChart(List<ChartDataPoint> chart)
        {
            Chart = chart;
        }

        public void UpdateGeneralChart(List<ChartDataPoint>? chart)
        {
            Chart = chart;
        }
    }
}
