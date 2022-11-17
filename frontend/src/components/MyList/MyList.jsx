import React from 'react'
import { useEffect, useState } from 'react'

export default function MyList(props) {

    const [movie, setMovie] = useState()


    useEffect(() => {
        setMovie(props.img)
    }, [])


  return (
    <div>
        <br /><br /> <br />  <br />  <br /><br /><br /> <br /> 
        <div className="poster">{movie ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}alt=""/>
          :null
        }
     </div>


    </div>
  )
}
