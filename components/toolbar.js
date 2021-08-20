import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
export default function () {
  return (
    <div className={styles.main}>
      <div>Home</div>
      <div>Another</div>
      <div>Moresomse</div>
    </div>
  );
}
