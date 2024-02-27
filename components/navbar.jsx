// built in link for SSR Op and SEO from next
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./footer";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <div className="nav-links">
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>About</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </div>
        <div className="heading">
          <h1 className="header">Zach Brose</h1>
          <span>Producer &#124; Songwriter &#124; Multi-Instrumentalist</span>
        </div>
        <Footer />
      </nav>
    </>
  );
}

export default Navbar;
