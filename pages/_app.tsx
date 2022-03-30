import { AppProps } from "next/app";
import "../styles/custom_props.css";
import "../styles/reset.css";
import "../styles/utility.css";
import "../styles/colors.css";
import "../styles/next.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
