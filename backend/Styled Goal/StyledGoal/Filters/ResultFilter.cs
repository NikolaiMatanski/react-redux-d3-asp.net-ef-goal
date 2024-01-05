using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using StyledGoal.DAL.DTOs;

namespace StyledGoal.Filters
{
    public class ResultFilter : IAsyncResultFilter
    {
        public async Task OnResultExecutionAsync(ResultExecutingContext context, ResultExecutionDelegate next)
        {
            if (context.Result is ObjectResult objectResult)
            {
                objectResult.Value = new BaseDto<object?>(objectResult.Value);
            }

            await next();
            return;
        }
    }
}
