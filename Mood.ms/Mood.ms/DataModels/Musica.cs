using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Text.Json.Serialization;

namespace Mood.ms.DataModels
{
    public class Musica
    {

        public int MusicaId { get; set; }
        public string MusicaNome { get; set; }
        public string MusicaArtista { get; set; }
        public string MusicaEstilo { get; set; }
        public string MusicaFeeling { get; set; }
        public string MusicaLink { get; set; }

    }
}
