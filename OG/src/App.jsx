import { useState, useEffect } from 'react'
import './App.css'
import config from './config.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as signalR from '@microsoft/signalr';
import MainPage from './component/MainPage.jsx';
import GamePage from './component/GamePage.jsx';

const EVENT_PARTY_CREATED = "PartyCreated";
const EVENT_PARTY_JOINED = "PartyJoined";
import VideoRecorder from './component/VideoRecorder.jsx';

function App() {

  const [connection, setConnection] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const initializeConnection = async () => {
      if (!connection) {
        const newConnection = new signalR.HubConnectionBuilder()
          .withUrl('http://10.30.90.94:5000' + '/hub')
          .build();

        newConnection.on("ReceivePlayers", (receivedPlayers) => {
          setPlayers(receivedPlayers);
        });

        try {
          await newConnection.start();
          setConnection(newConnection);
        } catch(error) {
          console.error('Error starting connection: ', error);
        }
      }
    }

    initializeConnection();

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [connection])

  const joinParty = async (nav, username) => {
    connection.on(EVENT_PARTY_JOINED, (partyId) => {
      console.log("Party joined: " + partyId);
      nav("/" + partyId);
    });

    try {
      await connection.invoke("JoinParty", username);
    } catch (error) {
      console.error('Error joining party:', error);
    }
  }

  const createParty = async (nav, username) => {
    connection.on(EVENT_PARTY_CREATED, (partyId) => {
      console.log("Party created: " + partyId);
      nav("/" + partyId);
    });

    try {
      await connection.invoke("CreateParty", username);
    } catch (error) {
      console.error('Error creating party:', error);
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage createParty={createParty} joinParty={joinParty} />}/>
        <Route path="/:id" element={<GamePage players={players}/>}/>
        <Route path="/video" elementt={<VideoRecorder />}/>
      </Routes>
    </Router>
  )
}

export default App