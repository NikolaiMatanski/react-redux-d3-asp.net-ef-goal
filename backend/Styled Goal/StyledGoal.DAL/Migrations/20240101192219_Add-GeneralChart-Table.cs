using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StyledGoal.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddGeneralChartTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GeneralCharts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralCharts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChartDataPoints",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false),
                    GeneralChartId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChartDataPoints", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChartDataPoints_GeneralCharts_GeneralChartId",
                        column: x => x.GeneralChartId,
                        principalTable: "GeneralCharts",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChartDataPoints_GeneralChartId",
                table: "ChartDataPoints",
                column: "GeneralChartId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChartDataPoints");

            migrationBuilder.DropTable(
                name: "GeneralCharts");
        }
    }
}
