import Text from "../Text";
import styles from "./World.module.css";

type WorldProps = {
    name: string;
    fileName: string;
    gamemode: string;
    dateModified: string;
    version: string;
    selected?: boolean;
    onClick?: () => void;
    onPlayClick?: () => void;
}

function World({name, fileName, gamemode, dateModified, version, selected, onClick, onPlayClick}: WorldProps) {
    return (
        <div className={`${styles.container} ${selected?styles.selected:""}`} onClick={onClick}>
            <img className={styles.preview} src={require("../../assets/resource/textures/misc/unknown_server.png")} alt={`Preview for world: ${name}`} />

            <div className={styles.hoverOverlay} onClick={onPlayClick}>
                <span className={styles.play} />
            </div>

            <Text className={styles.worldName}>{name}</Text>
            <Text className={styles.version}>{fileName} ({dateModified})</Text>
            <Text className={styles.mode}>{gamemode} Mode, Version: {version}</Text>
        </div>
    )
}

export default World;