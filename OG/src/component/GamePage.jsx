import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSignalR } from "../SignalRContext";

export function GamePage() {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const connection = useSignalR();

    useEffect(() => {
        if (connection) {
            const handleReceivePlayers = (receivedPlayers) => {
                receivedPlayers.forEach(element => {
                    console.log(element);
                })
                setPlayers(receivedPlayers);
            };
    
            connection.on("ReceivePlayers", handleReceivePlayers);
    
            return () => {
                connection.off("ReceivePlayers", handleReceivePlayers);
            };
        }
    }, [])

    return (
        <>
            <p>{id}</p>
            <h2>Liste des joueurs connectés :</h2>
            {players.map((player, index) => (
                <p key={index}>{player.username}</p>
            ))}
        </>
    );
}