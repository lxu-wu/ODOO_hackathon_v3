import { useParams } from "react-router";

const GamePage = ({ players }) => {
    const { id } = useParams();

    players.forEach(element => {
        console.log("Item: " + element);
    });

    return (
        <>
            <div className="card2">
                <div className="joueur-liste"><h3>liste des participants</h3>
                <div>
                {players.map((player, index) => (
                        <div key={index}>{player.username}</div>
                    ))}</div>
                </div>

                <div className="column-home">

                </div>
            </div>
        </>
    );
}

export default GamePage;