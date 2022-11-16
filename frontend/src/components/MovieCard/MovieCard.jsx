import './MovieCard.css'
import React from 'react'

function MovieCard({movie}) {
  return (
    <div class="MovieTile">
      {movie.poster_path ? <img class="poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}alt=""/>
        :null
      }
      {/* <h3>{movie.title}</h3> */}
      {/* {movie.overview} */}
  
   
    </div>
  )
}

export default MovieCard