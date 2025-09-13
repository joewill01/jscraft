import GameInstance from "../../components/GameInstance";
import { GetUiAPI } from "../../utils/UiAPI";
import styles from "./Game.module.css"

function Game() {
    let GameAPI;

    function setGameAPI(passedGameAPI: any) {
        GameAPI = passedGameAPI;
    }

    return (
        <div className={styles.container}>
            <GameInstance UiAPI={GetUiAPI()} setGameAPI={setGameAPI}/>
        </div>
  );
}

export default Game;