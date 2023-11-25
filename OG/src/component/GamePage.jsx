import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSignalR } from "../SignalRContext";

export function GamePage() {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const connection = useSignalR();

    useEffect(() => {
        if (connection) {
            connection.on("ReceivePlayers", (receivedPlayers) => {
                setPlayers(receivedPlayers);
            })
        }
    }, [])

    return (
        <>
            <p>{id}</p>
            <h2>Liste des joueurs connectés :</h2>
            <ul>
                {players.map((player) => (
                <li>{player.username}</li>
                ))}
            </ul>
        </>
    );
}