import {albumData, prodData} from '../albumData'
import Link from 'next/link'
import { useRouter } from 'next/router'



function Discography() {

  const albums = albumData.map(album => {
    return (
      <div className="small-container">
        <a className="album-link" target="_blank" href={album.link}>
          <img src={album.src} className="album-art" alt={album.alt}/>
        </a>
        <h2 className="album-title">{album.artist} - {album.album}</h2>
        <p className="credits">{album.year} - {album.role}</p>
      </div>
    )
  })

  return ( 
    <>
      <h4 style={{textAlign: 'center'}}>Selected Discography</h4>
      <div className="large-container">
        {albums}
      </div>
    </>
  )
}

export default Discography;