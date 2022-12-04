import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (  
  <footer className="footer">
    <a 
      target='_blank'
      rel="noreferrer"
      href='https://open.spotify.com/artist/3Tnf72o3WrwrwvNJ1GKsrN?si=hReAyObMRhiB-GT_twU7PQ'>
      <Image 
      className="icon"
      src='/images/spotify.png'
      alt='spotify logo'
      width={40}
      height={40}
    />
    </a>
    <a 
      target='_blank'
      rel="noreferrer"
      href='https://zachbrose.bandcamp.com/'>
      <Image 
      className="icon"
      src='/images/bandcamp.png'
      alt='bandcamp logo'
      width={40}
      height={40}
    />
    </a>
    <a 
      target='_blank'
      rel="noreferrer"
      href='https://www.instagram.com/zach_brose/'>
      <Image 
      className="icon"
      src='/images/instagram.png'
      alt='bandcamp logo'
      width={40}
      height={40}
    />
    </a>
  </footer>

  );
}

export default Footer;