import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useNavigate } from 'react-router-dom'

const MainPage = ({createParty, joinParty}) => {

    const nav = useNavigate();

    const _joinParty = () => {
      const username = document.getElementById("pseudo").value;
      joinParty(nav, username);
    };

    const _createParty = () => {
      const username = document.getElementById("pseudo").value;
      createParty(nav, username);
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
          <button onClick={_joinParty}>Rejoindre</button>
        </div>
        <div>
          <button onClick={_createParty}>Creer un tournoi</button>
        </div>
      </div>  
    );
}

export default MainPage;