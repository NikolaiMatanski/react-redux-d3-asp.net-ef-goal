using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StyledGoal.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddPieChartSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_ChartId",
                table: "ChartDataPoints");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChartDataPoints",
                table: "ChartDataPoints");

            migrationBuilder.RenameTable(
                name: "ChartDataPoints",
                newName: "DataPoints");

            migrationBuilder.RenameIndex(
                name: "IX_ChartDataPoints_ChartId",
                table: "DataPoints",
                newName: "IX_DataPoints_ChartId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DataPoints",
                table: "DataPoints",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "PieCharts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PieCharts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PieDataPoints",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LabelColor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PieChartId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PieDataPoints", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PieDataPoints_PieCharts_PieChartId",
                        column: x => x.PieChartId,
                        principalTable: "PieCharts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PieDataPoints_PieChartId",
                table: "PieDataPoints",
                column: "PieChartId");

            migrationBuilder.AddForeignKey(
                name: "FK_DataPoints_GeneralCharts_ChartId",
                table: "DataPoints",
                column: "ChartId",
                principalTable: "GeneralCharts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DataPoints_GeneralCharts_ChartId",
                table: "DataPoints");

            migrationBuilder.DropTable(
                name: "PieDataPoints");

            migrationBuilder.DropTable(
                name: "PieCharts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DataPoints",
                table: "DataPoints");

            migrationBuilder.RenameTable(
                name: "DataPoints",
                newName: "ChartDataPoints");

            migrationBuilder.RenameIndex(
                name: "IX_DataPoints_ChartId",
                table: "ChartDataPoints",
                newName: "IX_ChartDataPoints_ChartId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChartDataPoints",
                table: "ChartDataPoints",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChartDataPoints_GeneralCharts_ChartId",
                table: "ChartDataPoints",
                column: "ChartId",
                principalTable: "GeneralCharts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
