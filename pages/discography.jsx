import Image from "next/image";
import {albumData, prodData} from '../albumData'
import Link from 'next/link'


function Discography() {

  const albums = albumData.map(album => {
    return (
      <div className="small-container">
        {/* <a class="prod-link" target="_blank" href={`${album.bandcampLink}`}>
        <img 
          className="album-art"
          src={album.src}
          alt={album.alt}
        />
        </a>
        <p>{album.artist} - <i>{album.album}</i></p>
        */}

        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={album.src} className="album-art" alt={album.alt}/>
              </div>
              <div class="flip-card-back">
                <p>card back</p>
              </div>
            </div>
          <p>{album.artist} - <i>{album.album}</i></p>
          </div>
      </div>
    )
  })

  const prodList = prodData.map(obj => {
    return <a className="prod-link" target="_blank" href={`${obj.link}`}>{obj.artist} - <i>{obj.album}</i></a>
  })

  return ( 
    <>
      <h4 style={{textAlign: 'center'}}>Selected Discography</h4>
      <div className="large-container">
        {albums}
        <div className="prod-box">
          <h4>Additional Productions & Session Work</h4>
          {prodList}
        </div>
        <div className="prod-box"></div>
      </div>
    </>
  )
}

export default Discography;