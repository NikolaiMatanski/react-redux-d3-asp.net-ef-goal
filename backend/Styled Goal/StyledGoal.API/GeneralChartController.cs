using Microsoft.AspNetCore.Mvc;
using StyledGoal.API.Contracts;
using StyledGoal.DAL.Models;
using StyledGoal.EF.Services;

namespace StyledGoal.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeneralChartController : ControllerBase
    {

        private readonly GeneralChartService service;

        public GeneralChartController(IGeneralChartService service)
        {
            this.service = (GeneralChartService)service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GeneralChart>>> GetGeneralCharts()
            => Ok(await service.GetAllGeneralChartsAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<List<GeneralChart>>> GetGeneralChart(int id)
        {
            var chart = await service.GetGeneralChartByIdAsync(id);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return Ok(chart);
        }

        [HttpPost]
        public async Task<ActionResult<GeneralChart>> AddGeneralChart(GeneralChart chart)
            => Ok(await service.AddGeneralChartAsync(chart));

        [HttpPut("{id}")]
        public async Task<ActionResult<GeneralChart>> UpdateGeneralChart(int id, GeneralChart chartRequest)
        {
            var chart = await service.UpdateGeneralChartAsync(id, chartRequest);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return Ok(chart);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGeneralChart(int id)
        {
            var chart = await service.RemoveGeneralChartAsync(id);

            if (chart == null)
            {
                return BadRequest("Chart not found.");
            }

            return NoContent();
        }
    }
}
