namespace Server.Models;

public class Player
{
    public bool IsAdmin { get; init; } = false;

    public string Username { get; init; } = null!;
}