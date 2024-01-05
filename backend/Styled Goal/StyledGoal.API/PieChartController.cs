using Microsoft.AspNetCore.Mvc;
using StyledGoal.API.Contracts;
using StyledGoal.DAL.Models;
using StyledGoal.EF.Services;

namespace StyledGoal.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class PieChartController : ControllerBase
    {

        private readonly PieChartService service;

        public PieChartController(IPieChartService service)
        {
            this.service = (PieChartService)service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PieChart>>> GetPieCharts()
            => Ok(await service.GetAllPieChartsAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<List<PieChart>>> GetPieChart(int id)
        {
            var chart = await service.GetPieChartByIdAsync(id);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return Ok(chart);
        }

        [HttpPost]
        public async Task<ActionResult<PieChart>> AddPieChart(PieChart chart)
            => Ok(await service.AddPieChartAsync(chart));

        [HttpPut("{id}")]
        public async Task<ActionResult<PieChart>> UpdatePieChart(int id, PieChart chartRequest)
        {
            var chart = await service.UpdatePieChartAsync(id, chartRequest);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return Ok(chart);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePieChart(int id)
        {
            var chart = await service.RemovePieChartAsync(id);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return NoContent();
        }
    }
}
