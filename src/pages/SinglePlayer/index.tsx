import { useNavigate } from 'react-router-dom';
import OptionsBackground from '../../components/OptionsBackground';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import styles from './SinglePlayer.module.css';
import ScrollView from '../../components/ScrollView';
import World from '../../components/World';
import { useState } from 'react';

function SinglePlayer() {
    let navigate = useNavigate();

    let [selectedWorldId, setSelectedWorldId] = useState("");

    const worlds = [
        {
            id: "D6DBEF1B-10DB-47D3-80E6-CC27339FE8E9",
            name: "New World",
            fileName: "New World 2",
            gamemode: "Hardcore",
            dateModified: "14/09/2025 22:54",
            version: "1.16"
        },

        {
            id: "AB14DFD0-D97C-4061-BAA9-3636FE265A53",
            name: "New World",
            fileName: "New World",
            gamemode: "Creative",
            dateModified: "01/05/2024 07:52",
            version: "1.16"
        },

        {
            id: "B8FFD60F-8B97-4839-8627-9895D6A7F511",
            name: "My first world!",
            fileName: "My first world!",
            gamemode: "Survival",
            dateModified: "09/04/2023 16:44",
            version: "1.16"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <OptionsBackground />
                <p>Select World</p>
                <TextInput />
            </div>

            <div className={styles.middleSection}>
                <ScrollView contentContainerClassName={styles.worlds}>
                    {worlds.map((world) => {
                        return (
                            <World
                                name={world.name}
                                fileName={world.fileName}
                                gamemode={world.gamemode}
                                dateModified={world.dateModified}
                                version={world.version}
                                onClick={() => setSelectedWorldId(world.id)}
                                onPlayClick={() => navigate(`/game/${world.id}`)}
                                selected={world.id === selectedWorldId}
                            />
                        )
                    })}
                </ScrollView>
            </div>

            <div className={styles.lowerSection}>
                <OptionsBackground />
                <div className={styles.buttonGrid}>
                    <Button style={{gridArea: "play"}} disabled={selectedWorldId === ""} onClick={() => navigate(`/game/${selectedWorldId}`)}>Play Selected World</Button>
                    <Button style={{gridArea: "create"}}>Create New World</Button>
                    <Button style={{gridArea: "edit"}} disabled={selectedWorldId === ""}>Edit</Button>
                    <Button style={{gridArea: "delete"}} disabled={selectedWorldId === ""}>Delete</Button>
                    <Button style={{gridArea: "recreate"}} disabled={selectedWorldId === ""}>Re-Create</Button>
                    <Button style={{gridArea: "cancel"}} onClick={() => {navigate(-1)}}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default SinglePlayer;