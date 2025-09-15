import Text from '../../../components/Text';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.container}>
        <span className={`${styles.segment} ${styles.segment_left}`} />
        <span className={`${styles.segment} ${styles.segment_right}`} />
        <span className={styles.edition} />
        <Text className={styles.splash} shadow>Now in React!</Text>
    </div>
  );
}

export default Logo;