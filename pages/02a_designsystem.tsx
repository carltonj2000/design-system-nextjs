import * as styles from "../styles/02a_designsystem.module.css";

const ColorBox = ({
  hex = "#0B0D17",
  rgb = "11, 13, 23",
  hsl,
  text = "text-white",
  bg = "bg-dark",
}) => (
  <div className={styles.color}>
    <div className={`${styles.colorBox} ${text} ${bg}`}>{hex}</div>
    <p>
      <span className="text-accent">RGB</span>
      {rgb}
    </p>
    <p>
      <span className="text-accent">HSL</span>
      {hsl}
    </p>
  </div>
);
export default function DesignSystem02() {
  return (
    <div className={`container bg-dark text-white ${styles.container}`}>
      <h1>Design system</h1>
      <section>
        <h2 className={styles.title}>
          <span>01</span> colors
        </h2>
        <div className={styles.colors}>
          <ColorBox hsl="230&deg;, 35%, 7%" />
          <ColorBox
            hex="#D0D6F9"
            rgb="208, 214, 249"
            hsl="231&deg;, 77%, 90%"
            bg="bg-accent"
            text="text-dark"
          />
          <ColorBox
            hex="#FFFFFF"
            rgb="255, 255, 255"
            hsl="0&deg;, 0%, 100%"
            bg="bg-white"
            text="text-dark"
          />
        </div>
      </section>
    </div>
  );
}
