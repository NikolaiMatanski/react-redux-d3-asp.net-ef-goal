using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using StyledGoal.DAL.Models;

namespace StyledGoal.DAL.Data.EntityConfigurations
{
    public class PieChartEntityTypeConfiguration : IEntityTypeConfiguration<PieChart>
    {
        public void Configure(EntityTypeBuilder<PieChart> pieChartBuilder)
        {
            pieChartBuilder.ToTable("PieCharts");

            pieChartBuilder.HasKey(nameof(GeneralChart.Id));
            pieChartBuilder
                .HasMany(chart => chart.Chart)
                .WithOne(dataPoints => dataPoints.Chart)
                .HasForeignKey(chart => chart.PieChartId)
                .IsRequired();
        }
    }
}
