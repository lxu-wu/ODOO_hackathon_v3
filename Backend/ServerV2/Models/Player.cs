namespace Server.Models;

public class Player
{
    public string Identifier { get; init; }

    public bool IsAdmin { get; set; } = false;

    public string Username { get; set; } = null!;

    public Player(string identifier)
    {
        Identifier = identifier;
    }
}