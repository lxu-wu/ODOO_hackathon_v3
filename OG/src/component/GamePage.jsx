import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    players.forEach(element => {
        console.log("Item: " + element);
    });
    
    return (
        <div>
            <p>{id}</p>
            <h2>Liste des joueurs connectés :</h2>
            {players.map((player, index) => (
                <p key={index}>{player.username}</p>
            ))}
        </div>
    );
}

export default GamePage;