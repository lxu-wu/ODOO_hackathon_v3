import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config.js';
import * as signalR from '@microsoft/signalr';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignalRProvider } from './SignalRContext';

function App() {

  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(config.baseUrl + '/hub')
      .build();

    setConnection(newConnection);

    newConnection.start()
      .then(() => {
        console.log('Connexion SignalR r�ussie');
      })
      .catch((error) => {
        console.error('Erreur: ', error);
      })

    return () => {
      newConnection.stop()
        .then(() => {
          console.log("Connexion signalR arr�t�e");
        })
        .catch((error) => {
          console.error("Erreur lors de l'arret de SignalR: ", error);
        })
    }
  }, []);

  return (
    <SignalRProvider connection={connection}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </SignalRProvider>
  )
}

export default App
