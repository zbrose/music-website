import { albumData } from "../albumData";
import { useState } from "react";
import Credits from "../components/credits";

export default function Discography() {
  // const [isFlipped, setFlipped] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activeAlbumId, setActiveAlbumId] = useState(null);

  // get the album id
  const handleClick = (album, id) => {
    setActiveAlbumId(null);
    if (id === activeAlbumId && window.innerHeight > 500) {
      setActiveAlbum(null);
    } else {
      setActiveAlbumId(album.id);
      setActiveAlbum(album);
      window.scrollTo(0, 0);
    }
  };

  const albums = albumData.map((album, i) => {
    const isActiveAlbum = album.id === activeAlbumId;

    return (
      <div
        key={`key-${i}`}
        className={
          isActiveAlbum ? "small-container modal-open" : "small-container"
        }
      >
        <img
          src={album.src}
          className={isActiveAlbum ? "modal-open" : "album-art"}
          alt={album.alt}
          onClick={() => handleClick(album, album.id)}
        />

        <a className="album-link" rel="noreferrer" target="_blank">
          <h2 className="album-title">
            {album.artist} - {album.album}
          </h2>
          <p className="credits">
            {album.year} - {album.role}
          </p>
        </a>
      </div>
    );
  });

  return (
    <>
      {activeAlbum ? <Credits activeAlbum={activeAlbum} /> : null}
      <div className="large-container">{albums}</div>
    </>
  );
}
