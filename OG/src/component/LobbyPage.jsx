import { useEffect } from "react";
import { useParams } from "react-router";
import config from "../config";
import { useNavigate } from "react-router";
import { useAdmin } from './AdminContext';

const LobbyPage = ({ connection, players }) => {
    const { id } = useParams();
    const nav = useNavigate();

    const StartGame = () => {
        connection.on("GameStarted", () => {
            nav("/game/" + id);
        });

        connection.invoke("StartParty", id);
    };

    

    const { isAdmin } = useAdmin(connection, id);
    console.log(isAdmin);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.baseUrl}/api/party/exists?id=${id}`);

                if (!response.ok) {
                    console.error(response.status);
                    return;
                }

                const data = await response.json();
                const booleanValue = !!data;

                if (!booleanValue) {
                    nav('/404');
                }
            } catch (error) {
                console.error('Erreur pendant la récupération des données :', error);
            }
        };

        fetchData();

        return () => {
        };
    }, [id]);

    return (
        <>
            <div className="lobby-card">
                <h5 className="lobby-header">Liste des participants :</h5>
                <div className="joueur-liste">
                    {players.map((player, index) => (
                        <div key={index}>
                            <div key={index}>{player.username}</div>
                        </div>
                    ))}
                </div>
                <h3>Code: {id}</h3>
                <button className="lobby-start-btn" onClick={StartGame}>Start</button>
            </div>
        </>
    );
}

export default LobbyPage;