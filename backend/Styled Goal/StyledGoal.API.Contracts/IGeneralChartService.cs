using StyledGoal.DAL.Models;

namespace StyledGoal.API.Contracts
{
    public interface IGeneralChartService
    {
        public Task<List<GeneralChart>> GetAllGeneralChartsAsync();
        public Task<GeneralChart?> GetGeneralChartByIdAsync(int id);
        public Task<GeneralChart> AddGeneralChartAsync(GeneralChart request);
        public Task<GeneralChart?> UpdateGeneralChartAsync(int id, GeneralChart request);
        public Task<GeneralChart?> RemoveGeneralChartAsync(int id);
    }
}