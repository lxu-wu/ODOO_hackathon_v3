namespace Server.Models
{
    public class Party
    {
        public string Id { get; }

        public List<Player> Players { get; }

        public Party(string id)
        {
            Id = id;
            Players = new List<Player>();
        }
    }
}
