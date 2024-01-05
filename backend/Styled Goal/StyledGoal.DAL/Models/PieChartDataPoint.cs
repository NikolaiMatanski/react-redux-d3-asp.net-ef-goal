namespace StyledGoal.DAL.Models
{
    public class PieChartDataPoint
    {
        public int Id { get; private set; }

        public string Name { get; private set; } = string.Empty;

        public int Value { get; private set; }
        public string Color { get; private set; } = "#FFFFFF";
        public string LabelColor { get; private set; } = "#FFFFFF";

        // foreign key
        public int PieChartId { get; private set; }
        public PieChart? Chart { get; private set; }
    }
}

