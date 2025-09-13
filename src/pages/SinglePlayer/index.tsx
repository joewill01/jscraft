import { useNavigate } from 'react-router-dom';
import BlockBackground from '../../components/BlockBackground';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import styles from './SinglePlayer.module.css';
import ScrollView from '../../components/ScrollView';

function SinglePlayer() {
    let navigate = useNavigate();

    return (
        <div className={styles.container}>

            <div className={styles.topSection}>
                <BlockBackground />
                <p>Select World</p>
                <TextInput />
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
                <BlockBackground />
                <div className={styles.buttonGrid}>
                    <Button style={{gridArea: "play"}} disabled>Play Selected World</Button>
                    <Button style={{gridArea: "create"}}>Create New World</Button>
                    <Button style={{gridArea: "edit"}} disabled>Edit</Button>
                    <Button style={{gridArea: "delete"}} disabled>Delete</Button>
                    <Button style={{gridArea: "recreate"}} disabled>Re-Create</Button>
                    <Button style={{gridArea: "cancel"}} onClick={() => {navigate(-1)}}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default SinglePlayer;