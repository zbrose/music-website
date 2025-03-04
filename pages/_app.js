import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
