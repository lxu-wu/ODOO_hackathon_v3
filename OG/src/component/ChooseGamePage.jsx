const ChooseGamePage = ( {nav, username} ) => {

    const ChooseGame = ( { index } ) => {
        nav("/")
    };

    return (
        <>
            <div className="card-jeu">
                <h1 class='titre-card-jeu'>Choisissez votre jeu</h1>

                <div className="column-jeu">
                    <div className="row">
                        <div className="tire-avion">
                            <img src="../public/tir_papier.jpeg" alt="tire-avion" id="tir-papier" onClick={() => ChooseGame(0)}/>
                            Tire à l'avion</div>
                        <div className="lance-papier">
                            <img src="../public/tir_panier.jpeg" alt="" onClick={() => ChooseGame(1)}/>
                            Lancer de papier</div>
                    </div>
                    <div className="row">
                        {/* <div className="monkyType"> 
                            <img src="../public/monkytype.jpeg" alt="" onClick={() => ChooseGame(2)}/>
                            Monky type</div> */}
                        <div className="helicochaise">
                            <img src="../public/helico.jpeg" alt="" onClick={() => ChooseGame(3)}/>
                            Helicochaise</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseGamePage; 