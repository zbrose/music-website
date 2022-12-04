import {albumData} from '../albumData'
import Image from 'next/image'

function Album({albums}) {

  return ( 
    <div className="large-container">
      <div className="small-container">
          {albums}
      </div>
    </div>
  );
}

export default Album;