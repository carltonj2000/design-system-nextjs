import Head from "next/head";

import Color from "./color";
import Typography from "./typography";

export default function DesignSystem() {
  return (
    <div className={`container bg-dark text-white`}>
      <h1>Design system</h1>
      <Color />
      <Typography />
    </div>
  );
}
