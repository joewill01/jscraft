import styles from './BlockBackground.module.css';

function BlockBackground(props: { style?: React.CSSProperties; }) {
  return (
    <span className={styles.background} style={props.style} />
  );
}

export default BlockBackground;