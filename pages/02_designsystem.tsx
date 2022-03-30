import Head from "next/head";

import * as styles from "../styles/02_designsystem.module.css";

export default function DesignSystem02() {
  return (
    <div className="container">
      <Head>
        <title>02 Design System With Next JS</title>
      </Head>
      <section id="colors" className={`bg-dark text-accent ${styles.title}`}>
        <h1>Design System</h1>
        <div className={`${styles.box} bg-accent text-dark`}>
          light blue bg, with dark text
        </div>
        <div className={`${styles.box} bg-white text-dark`}>
          white bg, with dark text
        </div>
        <div className={`${styles.box} bg-accent20a text-white`}>
          light blue bg with 20% alpha and white text
        </div>
      </section>
    </div>
  );
}
