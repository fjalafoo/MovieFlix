import React from 'react'

function popularMovieCard(p, bannerMovie) {
  return (
    <div onClick={()=> bannerMovie(p)}>
    {p.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}alt=""/>
      :null
    }
    <h3>{p.title}</h3>

  </div>
  )
}

export default popularMovieCard