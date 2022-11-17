import './MovieCard.css'
import React from 'react'

function MovieCard({movie, bannerMovie}) {
  return (
    <div onClick={()=> bannerMovie(movie)}>
      {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt=""/>
        :null
      }
      <h3>{movie.title}</h3>
      {/* {movie.overview} */}
  
   
    </div>
  )
}

export default MovieCard