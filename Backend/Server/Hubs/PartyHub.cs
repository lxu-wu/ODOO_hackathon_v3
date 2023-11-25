using Microsoft.AspNetCore.SignalR;
using Server.Models;

namespace Server.Hubs
{
    public class PartyHub : Hub
    {
        private readonly Dictionary<string, Party> m_parties = new();

        public async Task CreateParty(string username)
        {
            await Console.Out.WriteLineAsync($"{username} creating a party...");

            //Recreate while it's unique
            string partyId = CreateId();
            while (m_parties.ContainsKey(partyId))
                partyId = CreateId();

            var party = new Party(partyId);
            party.Players.Add(new Player
            {
                Username = username,
                IsAdmin = true,
            });

            m_parties.Add(partyId, party);

            await Clients.Caller.SendAsync("PartyCreated", partyId);
            await Groups.AddToGroupAsync(Context.ConnectionId, partyId);

            await Console.Out.WriteLineAsync($"{username} created a party ({partyId})");
        }

        public async Task JoinParty(string partyId, string username)
        {
            await Console.Out.WriteLineAsync($"{username} try to join {partyId}...");

            if (!m_parties.TryGetValue(partyId, out var party))
            {
                await SendError("Party doesn't exists.");
                return;
            }

            if (party.Players.Any(x => x.Username == username))
            {
                await SendError("Player with the same username exists.");
                return;
            }

            await Console.Out.WriteLineAsync($"{username} joined {partyId}.");

            party.Players.Add(new Player
            {
                IsAdmin = false,
                Username = username,
            });

            //Notifying other users that a player joined the party
            await Clients.Group(partyId).SendAsync("Party_NewPlayerJoined");

            //Adding to group and sending a response to inform him that it successfully joined the party
            await Clients.Caller.SendAsync("PartyJoined");
            await Groups.AddToGroupAsync(Context.ConnectionId, partyId);
        }

        private async Task SendError(string errorMessage)
        {
            await Console.Out.WriteLineAsync($"Error: {errorMessage}");
            await Clients.Caller.SendAsync("Error", errorMessage);
        }

        private string CreateId()
        {
            Span<char> span = stackalloc char[10];

            for (int i = 0; i < 10; i++)
            {
                int c = Random.Shared.Next(0, 2);
                switch (c)
                {
                    case 0:
                        span[i] = (char)Random.Shared.Next('A', 'Z' + 1);
                        break;
                    case 1:
                        span[i] = (char)Random.Shared.Next(10);
                        break;
                }
            }

            return new string(span);
        }
    }
}
