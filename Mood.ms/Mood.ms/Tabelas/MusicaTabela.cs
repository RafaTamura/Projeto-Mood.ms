using Mood.ms.DataModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mood.ms.Tabelas
{
    public class MusicaTabelas : IEntityTypeConfiguration<Musica>
    {
        public void Configure(EntityTypeBuilder<Musica> builder)
        {

            builder.HasKey(x => x.MusicaId);
            builder.Property(x => x.MusicaNome).IsRequired().HasMaxLength(20);
            builder.Property(x => x.MusicaEstilo).IsRequired().HasMaxLength(10);
            builder.Property(x => x.MusicaLink).IsRequired().HasMaxLength(100);
            builder.Property(x => x.MusicaArtista).IsRequired().HasMaxLength(100);
            builder.Property(x => x.MusicaFeeling).IsRequired().HasMaxLength(10);




        }
    }
}