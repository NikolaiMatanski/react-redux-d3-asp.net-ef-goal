using StyledGoal.DAL.Models;

namespace StyledGoal.API.Contracts
{
    public interface IPieChartService
    {
        public Task<List<PieChart>> GetAllPieChartsAsync();
        public Task<PieChart?> GetPieChartByIdAsync(int id);
        public Task<PieChart> AddPieChartAsync(PieChart request);
        public Task<PieChart?> UpdatePieChartAsync(int id, PieChart request);
        public Task<PieChart?> RemovePieChartAsync(int id);
    }
}
