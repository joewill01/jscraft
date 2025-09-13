import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.container}>
        <span className={`${styles.segment} ${styles.segment_left}`} />
        <span className={`${styles.segment} ${styles.segment_right}`} />
        <span className={styles.edition} />
        <p className={styles.splash}>Now in React!</p>
    </div>
  );
}

export default Logo;