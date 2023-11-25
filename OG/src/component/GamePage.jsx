import { useEffect } from "react";
import { useParams } from "react-router";
import config from "../config";
import { useNavigate } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    const nav = useNavigate();

    players.forEach(element => {
        console.log("Item: " + element);
    });

    useEffect(async () => {
        await fetch(config.baseUrl + "/api/party/exists?id=" + id)
            .then(async response => {
                if (!response.ok) {
                    console.error(response.status);
                    return;
                }

                const data = await response.json();
                const boolean = !!data;

                if (!boolean){
                    nav("/");
                }
            });

        return () => {

        };
    }, []);

    return (
        <>
            <div className="card2">
                <div className="joueur-liste">
                <h5>Liste des participants :</h5>
                {players.map((player, index) => (
                        <div key={index}>{player.username}</div>
                    ))}
                </div>
                <div className="column-home">
                    
                </div>
            </div>
        </>
    );
}

export default GamePage;