import Button from '../../components/Button';
import styles from './Home.module.css';
import Logo from './Logo';
import SkyBox from './SkyBox';
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
        <Logo />
        <SkyBox />

        <div className={styles.buttonGrid}>
            <Button style={{gridArea: "singleplayer"}} onClick={() => {navigate("singleplayer")}}>Singleplayer</Button>
            <Button style={{gridArea: "multiplayer"}} onClick={() => {navigate("multiplayer")}}>Multiplayer</Button>
            <Button style={{gridArea: "realms"}}>Minecraft Realms</Button>
            <Button style={{gridArea: "options"}}>Options...</Button>
            <Button style={{gridArea: "quit"}}>Quit Game</Button>
        </div>

        <p className={styles.versionText}>Minecraft 1.7.10</p>
        <p className={styles.copyrightText}>Copyright Mojang AB. Do not distribute!</p>

    </div>
  );
}

export default Home;