import * as styles from "../styles/01_challenge.module.css";

export default function Challenge01() {
  var style = { "--gap": "3rem" } as React.CSSProperties;
  return (
    <div className="container flex" style={style}>
      <div className={styles.box}>a</div>
      <div className={styles.box}>b</div>
      <div className={styles.box}>c</div>
      <div className={styles.box}>d</div>
    </div>
  );
}
