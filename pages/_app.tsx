import { AppProps } from "next/app";
import "../styles/vars.css";
import "../styles/reset.css";
import "../styles/utility.css";
import "../styles/colors.css";
import "../styles/next.css";
import "../styles/typography.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
