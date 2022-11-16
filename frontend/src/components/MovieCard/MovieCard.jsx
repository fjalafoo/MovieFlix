import './MovieCard.css'
import React from 'react'
import {useState} from 'react';

function MovieCard({movie}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    
      <div className="poster" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
      {movie.poster_path ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}alt=""/>
          :null
        }
        {isHovering && (
        <>
        

         <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
    
            
         
        </>
      )}


       </div> 
      // {/* <h3>{movie.title}</h3> */}
      // {/* {movie.overview} */}
  
   
   
  )
}

export default MovieCard