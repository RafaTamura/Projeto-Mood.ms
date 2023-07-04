using Mood.ms.DataModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mood.ms.Tabelas
{
    //Monta a tabela do usuario no Banco de Dados
    public class UsuarioTabelas : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(20);
            builder.Property(x => x.Senha).IsRequired().HasMaxLength(10);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(30);

        }

    }
}