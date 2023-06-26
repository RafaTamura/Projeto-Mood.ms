using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mood.ms.DataModels;

namespace Mood.ms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicaController : ControllerBase
    {
        [HttpGet]
        [Route("musica")]
        public async Task<IActionResult> getAllAsync(
            [FromServices] Contexto contexto)
        {
            var musica = await contexto
                .Musica
                .AsNoTracking()  //só para consultar
                .ToListAsync();

            return musica == null ? NotFound() : Ok(musica);
        }

        [HttpGet]
        [Route("musica/{id}")]
        public async Task<IActionResult> getByIdAsync(
         [FromServices] Contexto contexto,
         [FromRoute] int id
             )
        {
            var musica = await contexto
                .Musica
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.MusicaId == id);

            return musica == null ? NotFound() : Ok(musica);
        }
        [HttpPost]
        [Route("musica")]
        public async Task<IActionResult> PostAsync([FromServices] Contexto contexto, [FromBody] Musica musica)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                await contexto.Musica.AddAsync(musica);
                await contexto.SaveChangesAsync();
                return Created($"Musica/musica/", musica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        [Route("musica/{id}")]
        public async Task<IActionResult> PutAsync(
          [FromServices] Contexto contexto,
          [FromBody] Musica musica,
          [FromRoute] int id
              )
        {
            if (!ModelState.IsValid) return BadRequest();
            var p = await contexto.Musica
                .FirstOrDefaultAsync(x => x.MusicaId == id);
            if (p == null)
                return NotFound("Pessoa não encontrada!");

            try
            {
                p.MusicaNome = musica.MusicaNome;

                contexto.Musica.Update(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
        [HttpDelete]
        [Route("musica/{id}")]
        public async Task<IActionResult> DeleteAsync(
        [FromServices] Contexto contexto,
        [FromRoute] int id
            )
        {
            var p = await contexto.Musica
                .FirstOrDefaultAsync(x => x.MusicaId == id);

            if (p == null)
                return NotFound("Música não encontrada!");

            try
            {

                contexto.Musica.Remove(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
