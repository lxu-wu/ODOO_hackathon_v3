import { useParams } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    players.forEach(element => {
        console.log("Item: " + element);
    });

    return (
        <>
            <div className="card2">
                <div className="joueur-liste">liste des participants</div>
                <div className="column-home">
                    {players.map((player, index) => (
                        <div className={index}>{player.username}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GamePage;