namespace Server.Models
{
    public record class Party(string Id)
    {
        public List<Player> Players { get; } = new();
    }
}
