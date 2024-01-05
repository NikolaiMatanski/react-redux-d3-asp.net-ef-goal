using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using StyledGoal.DAL.Models;

namespace StyledGoal.DAL.Data.EntityConfigurations
{
    public class PieChartDataPointEntityTypeConfiguration : IEntityTypeConfiguration<PieChartDataPoint>
    {
        public void Configure(EntityTypeBuilder<PieChartDataPoint> pieChartDataPointBuilder)
        {
            pieChartDataPointBuilder.ToTable("PieDataPoints");

            pieChartDataPointBuilder.HasKey(nameof(PieChartDataPoint.Id));
        }
    }
}
