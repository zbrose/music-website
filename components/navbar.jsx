// built in link for SSR Op and SEO from next
import Link from 'next/link'
import { useRouter } from 'next/router'


function Navbar() {
  const router = useRouter();
    return ( 
      <>
        <nav>
          <div>
            <h1 className='header'>Zach Brose</h1>
          </div>
          <div className="nav-links">
            <Link href='/'><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link>
            <Link href='/about'><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link>
            <Link href='/discography'><a className={router.pathname == "/discography" ? "active" : ""}>Discography</a></Link>
            <Link href='/contact'><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link>
          </div>
        </nav>
      </>
  );
}

export default Navbar;