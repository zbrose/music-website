import { albumData } from "../albumData";

export default function Discography() {
  const albums = albumData.map((album, i) => {
    return (
      <div key={`key-${i}`} className="small-container">
        <a
          className="album-link"
          rel="noreferrer"
          target="_blank"
          href={album.link}
        >
          <img src={album.src} className="album-art" alt={album.alt} />
        </a>
        <h2 className="album-title">
          {album.artist} - {album.album}
        </h2>
        <p className="credits">
          {album.year} - {album.role}
        </p>
      </div>
    );
  });

  return (
    <>
      <div className="large-container">{albums}</div>
    </>
  );
}
