import Footer from "../Components/Footer";
import MenuBar from "../Components/MenuBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
