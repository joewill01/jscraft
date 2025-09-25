import { useParams } from "react-router-dom";
import GameInstance from "../../components/GameInstance";
import Text from "../../components/Text";
import { useUiAPI } from "../../hooks/useUiAPI";
import styles from "./Game.module.css"

function Game() {
    let UiAPI = useUiAPI();
    let GameAPI;
    let { worldId } = useParams();

    function setGameAPI(passedGameAPI: any) {
        GameAPI = passedGameAPI;
    }

    return (
        <div className={styles.container}>
            <Text style={{color: "black"}}>{`World ID: ${worldId}`}</Text>
            <GameInstance UiAPI={UiAPI} setGameAPI={setGameAPI}/>
        </div>
  );
}

export default Game;