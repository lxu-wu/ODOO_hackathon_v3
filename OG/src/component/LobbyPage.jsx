import { useEffect } from "react";
import { useParams } from "react-router";
import config from "../config";
import { useNavigate } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    const nav = useNavigate();

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
            <div className="card2">
                <div className="joueur-liste">
                <h5>Liste des participants :</h5>
                {players.map((player, index) => (
                    <div key={index}>
                        <div>
                        <img src="../public/user.png" alt="" />
                        </div>
                        <div key={index}>{player.username}</div>
                    </div>                      
                    ))}
                </div>
                <div className="column-home">
                    
                </div>
            </div>
        </>
    );
}

export default GamePage;