import MenuBar from "../Components/MenuBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
