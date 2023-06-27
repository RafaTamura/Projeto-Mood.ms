using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mood.ms.Migrations
{
    /// <inheritdoc />
    public partial class DBMOOD : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Musica",
                columns: table => new
                {
                    MusicaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MusicaNome = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    MusicaArtista = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MusicaEstilo = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    MusicaFeeling = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    MusicaLink = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Musica", x => x.MusicaId);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Musica");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
