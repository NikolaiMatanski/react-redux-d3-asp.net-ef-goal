namespace StyledGoal.DAL.Models
{
    public class ChartDataPoint
    {
        public int Id { get; private set; }

        public int X { get; private set; }

        public int Y { get; private set; }

        // foreign key
        public int ChartId { get; private set; }
        public GeneralChart? Chart { get; private set; }
    }
}
