// import Link from "next/link";
// import { useRouter } from 'next/router'
// import { albumData } from "../albumData";


// function Album({album, handleClick}) {
//   const router = useRouter()
//   const {id} = router.query



//   return ( 
//     <>
//     {/* <div className="small-container">
//       <div onClick={handleClick}>
//           <div className='flip-card-inner'>
//             <div className="flip-card-front">
//               <img src={album.src} className="album-art" alt={album.alt}/>
//             </div>
//             <div className="flip-card-back">
//               <p>card back</p>
//             </div>
//           </div>
//       <p>{album.artist} - <i>{album.album}</i></p>
//       </div>
//     </div> */}

//     <div className="small-container">
//       <Link href={`/album/${id}`}>
//         <img src={album.src} className="album-art" alt={album.alt}/>
//       </Link>
//       <p>{album.artist} - <i>{album.album}</i></p>
//     </div>
//     </>  
//   );
// }

// export default Album;