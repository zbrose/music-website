import "../styles/globals.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
