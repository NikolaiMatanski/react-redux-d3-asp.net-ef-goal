using Microsoft.EntityFrameworkCore;
using StyledGoal.API.Contracts;
using StyledGoal.DAL.Data;
using StyledGoal.DAL.Models;

namespace StyledGoal.EF.Services
{
    public class PieChartService : IPieChartService
    {
        private readonly DataContext context;

        public PieChartService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<PieChart>> GetAllPieChartsAsync()
            => await context.PieCharts.Include(chart => chart.Chart).ToListAsync();

        public async Task<PieChart?> GetPieChartByIdAsync(int id)
            => await context.PieCharts.FindAsync(id);

        public async Task<PieChart> AddPieChartAsync(PieChart pieChartToAdd)
        {
            await context.PieCharts.AddAsync(pieChartToAdd);
            await context.SaveChangesAsync();
            return pieChartToAdd;
        }

        public async Task<PieChart?> UpdatePieChartAsync(int id, PieChart pieChartToUpdate)
        {
            var dbChart = await context.PieCharts.FindAsync(id);

            if (dbChart is null)
                return null;

            dbChart.UpdatePieChart(pieChartToUpdate?.Chart);

            await context.SaveChangesAsync();

            return dbChart;
        }

        public async Task<PieChart?> RemovePieChartAsync(int id)
        {
            var dbChart = await GetPieChartByIdAsync(id);

            if (dbChart is null)
                return null;

            context.PieCharts.Remove(dbChart);
            await context.SaveChangesAsync();
            return dbChart;
        }
    }
}
