"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import IconWrapper from "./IconWrapper";

function Navbar() {
  const router = usePathname();
  return (
    <nav>
      <div className="nav-links">
        <Link
          href="/discography"
          className={router.pathname == "/discography" ? "active" : ""}
        >
          Discography
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
        <Link
          href="/blog"
          className={router.pathname == "/blog" ? "active" : ""}
        >
          Blog
        </Link>
      </div>
      <div className="heading">
        <h1 className="header">Zach Brose</h1>
        <span>
          Producer &#124; Songwriter &#124; Composer &#124;
          Multi-Instrumentalist
        </span>
      </div>
      <IconWrapper />
    </nav>
  );
}

export default Navbar;
