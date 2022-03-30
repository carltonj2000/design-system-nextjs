import * as styles from "../styles/01_challenge.module.css";

export default function Challenge01() {
  return (
    <div className={`${styles.gapUp} container flex`}>
      <div className={styles.box}>a</div>
      <div className={`${styles.box} sr-only`}>b</div>
      <div className={styles.box}>c</div>
      <div className={styles.box}>d</div>
    </div>
  );
}
