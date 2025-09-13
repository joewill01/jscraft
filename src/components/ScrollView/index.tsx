import BlockBackground from '../BlockBackground';
import styles from './ScrollView.module.css';

function ScrollView(props: { style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div className={styles.container} style={props.style}>
        <div className={styles.content}>
            <BlockBackground style={{filter: "brightness(0.125)"}}/>
            {props.children}
        </div>
    </div>
  );
}

export default ScrollView;