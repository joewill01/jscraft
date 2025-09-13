import styles from './TextInput.module.css';

function TextInput(props: { style?: React.CSSProperties; }) {
  return (
    <div className={styles.container} style={props.style}>
        <input type="text"></input>
    </div>
  );
}

export default TextInput;