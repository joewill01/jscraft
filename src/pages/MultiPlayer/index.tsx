import { useNavigate } from 'react-router-dom';
import OptionsBackground from '../../components/OptionsBackground';
import Button from '../../components/Button';
import styles from './MultiPlayer.module.css';
import ScrollView from '../../components/ScrollView';

function MultiPlayer() {
    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <OptionsBackground />
                <p className={styles.title}>Play Multiplayer</p>
            </div>

            <div className={styles.middleSection}>
                <ScrollView>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                </ScrollView>
            </div>


            <div className={styles.lowerSection}>
                <OptionsBackground />
                <div className={styles.buttonGrid}>
                    <Button style={{gridArea: "join"}} disabled>Join Server</Button>
                    <Button style={{gridArea: "direct"}}>Direct Connection</Button>
                    <Button style={{gridArea: "add"}} >Add Server</Button>
                    <Button style={{gridArea: "edit"}} disabled>Edit</Button>
                    <Button style={{gridArea: "delete"}} disabled>Delete</Button>
                    <Button style={{gridArea: "refresh"}}>Refresh</Button>
                    <Button style={{gridArea: "cancel"}} onClick={() => {navigate(-1)}}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default MultiPlayer;