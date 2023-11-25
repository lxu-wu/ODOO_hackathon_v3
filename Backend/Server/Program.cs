using Server.Hubs;

var builder = WebApplication.CreateBuilder(args);

var urls = builder.Configuration.GetSection("Urls").Get<string[]>();
builder.WebHost.UseUrls(urls);

builder.Services.AddSignalR();
builder.Services.AddCors(x =>
{
    x.AddPolicy("Accept_Dev_Frontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseRouting();
app.UseCors("Accept_Dev_Frontend");

app.UseEndpoints(x => x.MapHub<PartyHub>("/ws/parties"));

app.Run();
