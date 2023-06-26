﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mood.ms.DataModels;

namespace Mood.ms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        [Route("usuario")]
        public async Task<IActionResult> getAllAsync(
        [FromServices] Contexto contexto)
        {
            var usuario = await contexto
                .Usuario
                .AsNoTracking()  //só para consultar
                .ToListAsync();

            return usuario == null ? NotFound() : Ok(usuario);
        }

        [HttpGet]
        [Route("usuario/{id}")]
        public async Task<IActionResult> getByIdAsync(
         [FromServices] Contexto contexto,
         [FromRoute] int id
             )
        {
            var usuario = await contexto
                .Usuario
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id);

            return usuario == null ? NotFound() : Ok(usuario);
        }
        [HttpPost]
        [Route("usuario")]
        public async Task<IActionResult> PostAsync([FromServices] Contexto contexto, [FromBody] Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                await contexto.Usuario.AddAsync(usuario);
                await contexto.SaveChangesAsync();
                return Created($"Usuario/usuario/", usuario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        [Route("usuario/{id}")]
        public async Task<IActionResult> PutAsync(
      [FromServices] Contexto contexto,
      [FromBody] Usuario usuario,
      [FromRoute] int id
          )
        {
            if (!ModelState.IsValid) return BadRequest();
            var p = await contexto.Usuario
                .FirstOrDefaultAsync(x => x.Id == id);
            if (p == null)
                return NotFound("Pessoa não encontrada!");

            try
            {
                p.Nome = usuario.Nome;

                contexto.Usuario.Update(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
        [HttpDelete]
        [Route("usuario/{id}")]
        public async Task<IActionResult> DeleteAsync(
        [FromServices] Contexto contexto,
        [FromRoute] int id
            )
        {
            var p = await contexto.Usuario
                .FirstOrDefaultAsync(x => x.Id == id);

            if (p == null)
                return NotFound("Usuario não encontrado!");

            try
            {

                contexto.Usuario.Remove(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}