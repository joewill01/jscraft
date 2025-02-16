import './GameInstance.css';

function GameInstance({UiAPI, setGameAPI}) {

    setGameAPI({})

    // this will create an instance of the minecraft game using a function that will take in the UIAPI and return the gameApi

    return (
        <div>
            <p>This is the game instance</p>
            <button onClick={()=>{UiAPI.testFunction()}}>Test</button>
        </div>
    );
}

export default GameInstance;
