import {albumData, prodData} from '../../albumData'
import { useRouter } from 'next/router'
import Link from 'next/link'


function Details() {
  const router = useRouter()
  const { id } = router.query
  const foundAlbum = albumData.find(album=>album.id.toString()===id)

  const albumCredits = foundAlbum.credits.map(credit=>{
    console.log(credit)
    return (
      <>
        <p className="credits">{credit.name} : {credit.role} </p>
      </>
    )
  })

  return (  
    <>
    {foundAlbum &&
      <>
      <div className='flex-row'>
          <div>
            <img src={foundAlbum.src} alt={foundAlbum.alt} className='album-zoom' />
          </div>

          <div>
            <h1 className="album-title">{foundAlbum.album}</h1>
            <h2 className="artist-name">by {foundAlbum.artist}</h2>
            <p>{foundAlbum.blog}</p>
            {albumCredits}
            {/* bandcamp and spotify links */}
          </div>
        </div>
        <h3 style={{textAlign: 'center'}} ><Link href='/discography'>Back</Link></h3>
        </>
    }
    </>

  );
}

export default Details;