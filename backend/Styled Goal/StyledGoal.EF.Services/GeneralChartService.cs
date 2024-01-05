using Microsoft.EntityFrameworkCore;
using StyledGoal.API.Contracts;
using StyledGoal.DAL.Data;
using StyledGoal.DAL.Models;

namespace StyledGoal.EF.Services
{
    public class GeneralChartService : IGeneralChartService
    {
        private readonly DataContext context;

        public GeneralChartService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<GeneralChart>> GetAllGeneralChartsAsync()
            => await context.GeneralCharts.Include(chart => chart.Chart).ToListAsync();

        public async Task<GeneralChart?> GetGeneralChartByIdAsync(int id)
            => await context.GeneralCharts.FindAsync(id);

        public async Task<GeneralChart> AddGeneralChartAsync(GeneralChart generalChartToAdd)
        {
            await context.GeneralCharts.AddAsync(generalChartToAdd);
            await context.SaveChangesAsync();
            return generalChartToAdd;
        }

        public async Task<GeneralChart?> UpdateGeneralChartAsync(int id, GeneralChart generalChartToUpdate)
        {
            var dbChart = await context.GeneralCharts.FindAsync(id);

            if (dbChart is null)
                return null;

            dbChart.UpdateGeneralChart(generalChartToUpdate?.Chart);

            await context.SaveChangesAsync();

            return dbChart;
        }

        public async Task<GeneralChart?> RemoveGeneralChartAsync(int id)
        {
            var dbChart = await GetGeneralChartByIdAsync(id);

            if (dbChart is null)
                return null;

            context.GeneralCharts.Remove(dbChart);
            await context.SaveChangesAsync();
            return dbChart;
        }
    }
}