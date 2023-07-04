using Microsoft.EntityFrameworkCore;
using Mood.ms.DataModels;
using Mood.ms.Tabelas;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mood.ms
{
    public class Contexto : DbContext
    {
        public Contexto()
        {

        }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Musica> Musica { get; set; }

        // Configura o caminho para o Banco de dados
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: false)
                    .Build()
                    .GetConnectionString("DBMOOD");

            optionsBuilder.UseLazyLoadingProxies();
            optionsBuilder.UseSqlServer(connectionString);
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
            modelBuilder.ApplyConfiguration(new MusicaTabelas());
            modelBuilder.ApplyConfiguration(new UsuarioTabelas());
            base.OnModelCreating(modelBuilder);
        }
    }
}