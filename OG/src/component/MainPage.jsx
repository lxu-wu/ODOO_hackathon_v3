import { useSignalR } from '../SignalRContext';
import { useNavigate } from 'react-router-dom'

export function MainPage() {

    const connection = useSignalR(); 
    const navigate = useNavigate();

    const createParty = async () => {
      if (connection) {
        const username = document.getElementById("pseudo").value;

        connection.on("PartyCreated", (partyId) => {
          navigate("/" + partyId);
        });

        connection.invoke("CreateParty", username);
      }
    };

    return (
        <div className='card'> 
          <div >
              <img className='logo' src="../public/olymp-logo.jpg" alt="" />
          </div>
          <div>
          
          <input type="text" placeholder='Pseudo' id='pseudo' />
          </div>
          <div>
            <button>Rejoindre</button>
          </div>
          <div>
            <button onClick={createParty}>Creer un tournoi</button>
          </div>
        </div>  
    );
}