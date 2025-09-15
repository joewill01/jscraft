import { useParams } from "react-router-dom";
import GameInstance from "../../components/GameInstance";
import Text from "../../components/Text";
import { GetUiAPI } from "../../utils/UiAPI";
import styles from "./Game.module.css"

function Game() {
    let GameAPI;
    let { worldId } = useParams();

    function setGameAPI(passedGameAPI: any) {
        GameAPI = passedGameAPI;
    }

    return (
        <div className={styles.container}>
            <Text style={{color: "black"}}>{`World ID: ${worldId}`}</Text>
            <GameInstance UiAPI={GetUiAPI()} setGameAPI={setGameAPI}/>
        </div>
  );
}

export default Game;