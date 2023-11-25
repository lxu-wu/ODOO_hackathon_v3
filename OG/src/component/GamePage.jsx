import { useParams } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    players.forEach(element => {
        console.log("Item: " + element);
    });

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