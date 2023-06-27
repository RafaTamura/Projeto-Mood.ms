namespace Mood.ms
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);   
            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddCors();
            builder.Services.AddDbContext<Contexto>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Configura o cors para utilizar o Angular
            builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
            {
                builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            }));

            var app = builder.Build();

            app.UseCors(p => p.WithOrigins("*").AllowAnyMethod().AllowAnyHeader()); //cors angular

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            


            app.MapControllers();

            app.Run();
        }
    }
}