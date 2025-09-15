import styles from './OptionsBackground.module.css';

function OptionsBackground(props: { style?: React.CSSProperties; }) {
  return (
    <span className={styles.background} style={props.style} />
  );
}

export default OptionsBackground;