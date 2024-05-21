import Link from "next/link";
import { FaSpotify, FaInstagram, FaBandcamp } from "react-icons/fa";

export default function IconWrapper() {
  return (
    <footer className="social-links">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/artist/3Tnf72o3WrwrwvNJ1GKsrN?si=hReAyObMRhiB-GT_twU7PQ"
      >
        <FaSpotify />
      </Link>

      <Link
        target="_blank"
        rel="noreferrer"
        href="https://zachbrose.bandcamp.com/"
      >
        <FaBandcamp />
      </Link>

      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/zach_brose/"
      >
        <FaInstagram />
      </Link>
    </footer>
  );
}
