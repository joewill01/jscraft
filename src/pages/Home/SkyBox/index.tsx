import styles from './SkyBox.module.css';

function SkyBox() {
  return (
    <div className={styles.container}>
        <div className={styles.position}>
            <div className={styles.faces}>
                <img src={require('../../../assets/resource/textures/gui/title/background/panorama_0.png')} />
                <img src={require('../../../assets/resource/textures/gui/title/background/panorama_1.png')} />
                <img src={require('../../../assets/resource/textures/gui/title/background/panorama_2.png')} />
                <img src={require('../../../assets/resource/textures/gui/title/background/panorama_3.png')} />
            </div>
        </div>
    </div>
  );
}

export default SkyBox;