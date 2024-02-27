import Image from "next/image";

export default function Footer() {
  return (
    <footer className="social-links">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/artist/3Tnf72o3WrwrwvNJ1GKsrN?si=hReAyObMRhiB-GT_twU7PQ"
      >
        <Image
          className="icon"
          src="/images/spotify.png"
          alt="spotify logo"
          width={26}
          height={26}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://zachbrose.bandcamp.com/"
      >
        <Image
          className="icon"
          src="/images/bandcamp.png"
          alt="bandcamp logo"
          width={26}
          height={26}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/zach_brose/"
      >
        <Image
          className="icon"
          src="/images/instagram.png"
          alt="bandcamp logo"
          width={26}
          height={26}
        />
      </a>
    </footer>
  );
}
