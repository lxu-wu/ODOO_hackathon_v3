using Server.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var urls = builder.Configuration.GetSection("Urls").Get<string[]>();
builder.WebHost.UseUrls(urls!);

builder.Services.AddCors(options =>
{
    options.AddPolicy("test", builder => builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:5173")
            .AllowCredentials());
});


builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.MapControllers();

app.UseRouting();

app.UseCors("test");

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseEndpoints(x => x.MapHub<PartyHub>("/hub"));

app.Run();
