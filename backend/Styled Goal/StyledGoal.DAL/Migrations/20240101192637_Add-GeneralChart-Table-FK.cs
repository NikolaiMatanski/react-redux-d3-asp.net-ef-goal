using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StyledGoal.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddGeneralChartTableFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_GeneralChartId",
                table: "ChartDataPoints");

            migrationBuilder.DropIndex(
                name: "IX_ChartDataPoints_GeneralChartId",
                table: "ChartDataPoints");

            migrationBuilder.DropColumn(
                name: "GeneralChartId",
                table: "ChartDataPoints");

            migrationBuilder.AddColumn<int>(
                name: "ChartId",
                table: "ChartDataPoints",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ChartDataPoints_ChartId",
                table: "ChartDataPoints",
                column: "ChartId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_ChartId",
                table: "ChartDataPoints",
                column: "ChartId",
                principalTable: "GeneralCharts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_ChartId",
                table: "ChartDataPoints");

            migrationBuilder.DropIndex(
                name: "IX_ChartDataPoints_ChartId",
                table: "ChartDataPoints");

            migrationBuilder.DropColumn(
                name: "ChartId",
                table: "ChartDataPoints");

            migrationBuilder.AddColumn<int>(
                name: "GeneralChartId",
                table: "ChartDataPoints",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ChartDataPoints_GeneralChartId",
                table: "ChartDataPoints",
                column: "GeneralChartId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_GeneralChartId",
                table: "ChartDataPoints",
                column: "GeneralChartId",
                principalTable: "GeneralCharts",
                principalColumn: "Id");
        }
    }
}
