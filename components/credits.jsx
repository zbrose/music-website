export default function Credits({ activeAlbum }) {
  return (
    <div className="credits-container">
      <h1>{activeAlbum.album}</h1>
      <h3>{activeAlbum.artist}</h3>
      <h3>
        {activeAlbum.year} - {activeAlbum.role}
      </h3>
      <p className="blurb">{activeAlbum.blog}</p>
      <a
        className="album-link"
        rel="noreferrer"
        target="_blank"
        href={activeAlbum.link}
      >
        <h3>Listen Here</h3>
      </a>
    </div>
  );
}
