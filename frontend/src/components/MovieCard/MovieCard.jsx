import './MovieCard.css'
import React from 'react'

function MovieCard({movie}) {
  return (
    
      <div className="poster"> {movie.poster_path ? <img className='posterImg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}alt=""/>
          :null
        }
       </div> 
      // {/* <h3>{movie.title}</h3> */}
      // {/* {movie.overview} */}
  
   
   
  )
}

export default MovieCard