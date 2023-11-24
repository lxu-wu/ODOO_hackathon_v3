namespace Backend.Models
{
    public class Party
    {
        public int PartyId { get; set; }

        public string PartyName { get; set; }

        public Guid PartyAdminId { get; set; }
    }
}