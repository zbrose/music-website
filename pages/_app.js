import "../styles/globals.scss";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
