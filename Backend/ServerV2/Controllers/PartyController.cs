using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace ServerV2.Controllers;

[ApiController]
[Route("api/party")]
public class PartyController : Controller
{
    private readonly Dictionary<string, Party> m_parties = new();

    public PartyController(Dictionary<string, Party> parties)
        => m_parties = parties;

    [HttpGet("exists")]
    public IActionResult PartyExists([FromQuery] string id)
    {
        Console.WriteLine(m_parties.ContainsKey(id));
        return this.Ok(m_parties.ContainsKey(id));
    }
}