import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from 'axios'
import MovieCard from "../MovieCard/MovieCard";
import YouTube from "react-youtube";


import jwt_decode from 'jwt-decode';

import { useEffect, useState } from 'react';




const Home = () => {
  //have an array that stores featured movies, for now this array is empty
  const [movies, setMovies] = useState([])
  // have a string that stores the searched movie, for now that string is empty
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  // have an object that stores the selected movie to display its in the banner, for now that object is empty
  const [bannerMovie, setBannerMovie] = useState({})
  const img_path = "https://image.tmdb.org/t/p/w1280"
   //have an array that stores popular on netflix movies, for now this array is empty
   const [popularOnNetflixMovies, setPopularOnNetflixMovies] = useState([])




  //function that grabs 20 featured movies from API
  const grabMovies = async () =>{
    //data const returns an array of 20 movies from the movie db api 
    //this response is accessed from the data object that has an object called results that contains objects of all 20 movies
    const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    }) 
    //console log for debugging
    console.log('results', results)
    //set the empty featured movies array to the results grabbed from API
    setMovies(results)
    //set the top banner to show the first movie from the featured movies
    setBannerMovie(results[0])

  }


    //function that popular on Netfix movies from API
    const grabPopularOnNetflixMovies = async () =>{
      //data const returns an array of popular on netflix movies from the movie db api 
      //this response is accessed from the data object that has an object called results that contains objects of all popular movies
      const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/trending/all/week`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'en-Us'
        }
      }) 
      //console log for debugging
      console.log('results', results)
      //set the empty popular on netflix array to the results grabbed from API
      setPopularOnNetflixMovies(results)  
    }

    //function that search for a movie
    const searchMovie = async (search) =>{
      //data const returns a string of the searched for movie
      //this response is accessed from the data object that has an object called results that contains an object of the searched for movie
     debugger
      const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: search
          
        }
      }) 
      //console log for debugging
      console.log('results', results)
      debugger
      //set the empty search movie string to the result grabbed from API
      setSearchResults(results)
  
    }


//runs whenever the homepage is loaded
useEffect(() => {
  //call grabmovies method
  grabMovies()
    //call searchMovie method, pass the movie to be searched
  searchMovie(search)
  //call grabPopularOnNetflixMovies method
  grabPopularOnNetflixMovies()


}, [])

//function that displays movies
const displayFeaturedMovies = () =>{
  //mapping the movies on to our empty movies array to populate it
  return movies.map(movie =>(
    //display movie card page as element here
    <MovieCard
    key={movie.id}
    movie={movie}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}


//function that displays popularOnNetflixMovies
const displayPopularOnNetflixMovies = () =>{
  //mapping the popular movies on to our empty popularOnNetflixMovies array to populate it
  return popularOnNetflixMovies.map(p =>(
    //display movie card page as element here
    <MovieCard
    key={p.id}
    p={p}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}

// function that displays searched items
const displaySearchedMovies = () =>{
  //mapping the searched movie on to our empty string
  return searchResults.map(s =>(
    //display movie card page as element here
    <MovieCard
    key={s.id}
    movie={s}
    />
  ))
}


//function to search movies
const findMovieBySearch = (e)=> {
  //prevent refreshing
  e.preventDefault()
  debugger
  searchMovie(search)

}



  return (
    <div className="home">
      <div className="featuredMoviesContainer">
        {/* search movie functionality */}
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <form onSubmit={findMovieBySearch}>
          < input type='text' onChange={(e) => setSearch(e.target.value)}></input>
          <button type='submit'>Search</button>
        </form>
        {search}


        <div className="featuredBanner" style={{backgroundImage: `url(${img_path}${bannerMovie.backdrop_path})`}}>
        <h2>{bannerMovie.title}</h2>
        {bannerMovie.overview ? <small>{bannerMovie.overview}</small> : null}
        </div>
        {/* call a function that display movies  */}
        {/* but displays the search result if searchResults array is populated and has length */}
        {searchResults.length ? 
        displaySearchedMovies()
        :
      


        displayFeaturedMovies()
        // displayPopularOnNetflixMovies()
         }
 
                            
      </div>
    </div>
  );
};

export default Home;