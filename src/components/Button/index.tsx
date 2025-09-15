import Text from '../Text';
import styles from './Button.module.css';

function Button(props: { style?: React.CSSProperties; disabled?: boolean; onClick?: () => void; children: string }) {
  return (
    <div className={`${styles.container} ${props.disabled?styles.disabled:""}`} style={props.style} onClick={props.onClick}>
      <span className={`${styles.bg} ${styles.bgLeft}`}></span>
      <span className={`${styles.bg} ${styles.bgRight}`}></span>

      <Text className={styles.text} shadow>{props.children}</Text>
    </div>
  );
}

export default Button;