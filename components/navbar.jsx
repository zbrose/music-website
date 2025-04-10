// built in link for SSR Op and SEO from next
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <div className="heading">
        <h1 className="header">Zach Brose</h1>
        <span>Producer &#124; Songwriter &#124; Multi-Instrumentalist</span>
      </div>
      <div className="nav-links">
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>
          Projects
        </Link>
        <Link
          href="/about"
          className={router.pathname == "/about" ? "active" : ""}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={router.pathname == "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
