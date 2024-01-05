using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using StyledGoal.DAL.Models;

namespace StyledGoal.DAL.Data.EntityConfigurations
{
    public class GeneralChartEntityTypeConfiguration : IEntityTypeConfiguration<GeneralChart>
    {
        public void Configure(EntityTypeBuilder<GeneralChart> chartBuilder)
        {
            chartBuilder.ToTable("GeneralCharts");

            chartBuilder.HasKey(nameof(GeneralChart.Id));
            chartBuilder
                .HasMany(chart => chart.Chart)
                .WithOne(dataPoints => dataPoints.Chart)
                .HasForeignKey(chart => chart.ChartId)
                .IsRequired();
        }
    }
}
