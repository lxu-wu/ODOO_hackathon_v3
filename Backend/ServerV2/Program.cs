using Server.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var urls = builder.Configuration.GetSection("Urls").Get<string[]>();
builder.WebHost.UseUrls(urls!);

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", builder => builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .WithOrigins("http://10.30.90.94:5173"));
});


builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseRouting();

app.UseCors("MyPolicy");
//app.UseCors("test");

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseEndpoints(x => x.MapHub<PartyHub>("/hub"));

app.Run();
