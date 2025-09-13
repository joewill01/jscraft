import { Dispatch, SetStateAction } from 'react';
import { UiAPIType } from '../../utils/UiAPI';
import './GameInstance.module.css';

type GameInstanceProps = {
    UiAPI: UiAPIType;
    setGameAPI: Dispatch<SetStateAction<any>>;
}

function GameInstance({UiAPI, setGameAPI}: GameInstanceProps) {
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