using Microsoft.EntityFrameworkCore;
using StyledGoal.DAL.Data.EntityConfigurations;
using StyledGoal.DAL.Models;

namespace StyledGoal.DAL.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<GeneralChart> GeneralCharts => Set<GeneralChart>();
        public DbSet<ChartDataPoint> ChartDataPoints => Set<ChartDataPoint>();
        public DbSet<PieChart> PieCharts => Set<PieChart>();
        public DbSet<PieChartDataPoint> PieChartDataPoints => Set<PieChartDataPoint>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new GeneralChartEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ChartDataPointEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new PieChartEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new PieChartDataPointEntityTypeConfiguration());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
