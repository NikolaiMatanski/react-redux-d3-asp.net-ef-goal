using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using StyledGoal.DAL.Models;

namespace StyledGoal.DAL.Data.EntityConfigurations
{
    public class ChartDataPointEntityTypeConfiguration : IEntityTypeConfiguration<ChartDataPoint>
    {
        public void Configure(EntityTypeBuilder<ChartDataPoint> chartDataPointBuilder)
        {
            chartDataPointBuilder.ToTable("DataPoints");

            chartDataPointBuilder.HasKey(nameof(ChartDataPoint.Id));
        }
    }
}
