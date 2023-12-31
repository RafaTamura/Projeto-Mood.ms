﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mood.ms.DataModels;

namespace Mood.ms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MusicaController : ControllerBase
    {
    //Consulta todos da Database (GET)

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
        //Consulta pelo ID (GET)
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
    // Consulta pelo feeling no banco de dados (GET)
        [HttpGet]
        [Route("musica/feeling/{feeling}")]
        public async Task<IActionResult> getByFeelingAsync(
         [FromServices] Contexto contexto,
         [FromRoute] string feeling
             )
        {
            var musica = await contexto.Musica
                .AsNoTracking()
                .Where(p => p.MusicaFeeling.ToLower() == feeling.ToLower())
                .ToListAsync();

            return musica.Count == 0 ? NotFound() : Ok(musica);
        }
    // Consulta pelo feeling e esilo musical no banco de dados (GET)
        [HttpGet]
        [Route("musica/feeling/{feeling}/{estilo}")]
        public async Task<IActionResult> GetByFeelEstiloAsync(
     [FromServices] Contexto contexto,
     [FromRoute] string estilo,
     [FromRoute] string feeling)
        {
            var musicas = await contexto.Musica
                .AsNoTracking()
                .Where(m => m.MusicaEstilo.ToLower() == estilo.ToLower() && m.MusicaFeeling.ToLower() == feeling.ToLower())
                .ToListAsync();

            return Ok(musicas);
        }

     //Inserir dados no Banco de Dados (POST)
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

     // Atualiza os dados no Banco de dados (PUT)
        [HttpPut]
        [Route("musica/{id}")]
        public async Task<IActionResult> PutAsync(
            [FromServices] Contexto contexto,
            [FromBody] Musica musica, 
            [FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest();
            var p = await contexto.Musica
                .FirstOrDefaultAsync(x => x.MusicaId == id);
            if (p == null)
                return NotFound("Musica não encontrada!");

            try
            {
                p.MusicaNome = musica.MusicaNome;
                p.MusicaLink = musica.MusicaLink;
                p.MusicaArtista = musica.MusicaArtista;
                p.MusicaEstilo = musica.MusicaEstilo;
                p.MusicaFeeling = musica.MusicaFeeling;

                contexto.Musica.Update(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

    // Exclui o dado do banco de dados
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
