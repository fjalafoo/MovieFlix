import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from 'axios'
import MovieCard from "../MovieCard/MovieCard";
import YouTube from "react-youtube";


import jwt_decode from 'jwt-decode';

import { useEffect, useState } from 'react';
import movieTrailer from "movie-trailer";





const Home = (props) => {
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
  //have an array that stores comedy movies, for now this array is empty
  const [comedyMovies, setComedyMovies] = useState([])
  //have an array that stores romance movies, for now this array is empty
  const [romanceMovies, setRomanceMovies] = useState([])
  //have an array that stores action movies, for now this array is empty
  const [actionMovies, setActionMovies] = useState([])
  //have an array that stores horror movies, for now this array is empty
  const [horrorMovies, setHorrorMovies] = useState([])
  //options for video
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }
  //  //have a string that stores the trailer url link, for now this string is empty
  const [trailerUrl, setTrailerUrl] = useState("")





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
    //set the displayed banner to show the first movie from the featured movies
    setBannerMovie(results[0])

  }


    //function that grabs popular on Netfix movies from API
    const grabPopularOnNetflixMovies = async () =>{
      //data const returns an array of popular on netflix movies from the movie db api 
      //this response is accessed from the data object that has an object called results that contains objects of all popular movies
      const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/trending/all/day`, {
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


      //function that grabs comedy movies from API
      const grabComedyMovies = async () =>{
        //data const returns an array of comedy movies from the movie db api 
        //this response is accessed from the data object that has an object called results that contains objects of all comedy movies
        const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: '35',
            language: 'en-Us'
          }
        }) 
        //console log for debugging
        console.log('results', results)
        //set the empty popular on netflix array to the results grabbed from API
        setComedyMovies(results)  
      }


        //function that grabs romance movies from API
        const grabRomanceMovies = async () =>{
          //data const returns an array of romance movies from the movie db api 
          //this response is accessed from the data object that has an object called results that contains objects of all romance movies
          const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              with_genres: '10749',
              language: 'en-Us'
            }
          }) 
          //console log for debugging
          console.log('results', results)
          //set the empty popular on netflix array to the results grabbed from API
          setRomanceMovies(results)  
        }

        //function that grabs action movies from API
        const grabActionMovies = async () =>{
          //data const returns an array of action movies from the movie db api 
          //this response is accessed from the data object that has an object called results that contains objects of all action movies
          const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              with_genres: '28',
              language: 'en-Us'
            }
          }) 
          //console log for debugging
          console.log('results', results)
          //set the empty popular on netflix array to the results grabbed from API
          setActionMovies(results)  
        }

        //function that grabs horror movies from API
        const grabHorrorMovies = async () =>{
          //data const returns an array of horror movies from the movie db api 
          //this response is accessed from the data object that has an object called results that contains objects of all horror movies
          const {data : {results}}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              with_genres: '27',
              language: 'en-Us'
            }
          }) 
          //console log for debugging
          console.log('results', results)
          //set the empty popular on netflix array to the results grabbed from API
          setHorrorMovies(results)  
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
  //call grabComedyMovies method
  grabComedyMovies()
  //call the grabRomanceMovies method
  grabRomanceMovies()
  //call the grabActionMovies method
  grabActionMovies()
  //call the grabHorrorMovies method
  grabHorrorMovies()


}, [])

//function that displays movies
const displayFeaturedMovies = () =>{
  //mapping the movies on to our empty movies array to populate it
  return movies.map(movie =>(
    //display movie card page as element here
    <MovieCard
    setImg={props.setImg}
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
    setImg={props.setImg}
    key={p.id}
    movie={p}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}

//function that displays comedyMovies
const displayComedyMovies = () =>{
  //mapping the comedy movies on to our empty comedyMovies array to populate it
  return comedyMovies.map(c =>(
    //display movie card page as element here
    <MovieCard
    key={c.id}
    movie={c}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}


//function that displays romanceMovies
const displayRomanceMovies = () =>{
  //mapping the comedy movies on to our empty comedyMovies array to populate it
  return romanceMovies.map(rm =>(
    //display movie card page as element here
    <MovieCard
    key={rm.id}
    movie={rm}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}

//function that displays actionMovies
const displayActionMovies = () =>{
  //mapping the action movies on to our empty actionMovies array to populate it
  return actionMovies.map(am =>(
    //display movie card page as element here
    <MovieCard
    key={am.id}
    movie={am}
    //to display the banner of the rendered movie
    bannerMovie={setBannerMovie}
    />
  ))
}

//function that displays horrorMovies
const displayHorrorMovies = () =>{
  //mapping the horror movies on to our empty horrorMovies array to populate it
  return horrorMovies.map(h =>(
    //display movie card page as element here
    <MovieCard
    key={h.id}
    movie={h}
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
    setImg={props.setImg}
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

console.log(popularOnNetflixMovies)


//function to handle clicks to display trailer
const handleClick = (movie)=> {
  if(trailerUrl){
    setTrailerUrl("")
  }
  else{
    movieTrailer(movie?.name || "")
    .then(url =>{

      const urlParams = new URLSearchParams (new URL(url).search)
      setTrailerUrl (urlParams.get('v'))

    })
    .catch((error)=> console.log(error))
  }

}

  return (
    <div className="home">
      {/* <NavBar onLogoutHandler = {onLogoutHandler} isAuth={isAuth} user={user} /> */}
      <div className="featuredMoviesContainer">
        {/* search movie functionality */}
       <br /><br /> <br />  <br />  <br />
     
        <form onSubmit={findMovieBySearch}>
          < input className="searchInput" type='text' onChange={(e) => setSearch(e.target.value)}></input>
          <button className="searchBtn" type='submit'>Search</button>
        </form>
        {search}


        <div className="featuredBanner" style={{backgroundImage: `url(${img_path}${bannerMovie.backdrop_path})`}}>
        <h2 className="bannerMovieTitle">{bannerMovie.title}</h2>
        <p className="bannerMovieOverview">{bannerMovie.overview ? <small>{bannerMovie.overview}</small> : null}</p>
        <button className="PlayBtn">Play</button>
        <button className="InfoBtn">Info</button>
        </div>



        {/* call a function that display movies  */}
        {/* but displays the search result if searchResults array is populated and has length */}

        <h2 className="MovieTileHeading">Recent Search</h2>
        <div className="MovieTile">{displaySearchedMovies()}</div>
        <br /> 
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}

        <h2 className="MovieTileHeading">New Releases</h2>
        <div className="MovieTile">{displayPopularOnNetflixMovies()}</div>  
        <button className="MovieTile" onClick={handleClick}>Trailer</button>  
        <br /> 

        <h2 className="MovieTileHeading">Romance</h2>
        <div className="MovieTile">{displayRomanceMovies()}</div>  
        <br /> 

        <h2 className="MovieTileHeading">Horror</h2>
        <div className="MovieTile">{displayHorrorMovies()}</div>   

         <h2 className="MovieTileHeading">Popular On Netflix</h2>
        <div className="MovieTile">{displayFeaturedMovies()}</div>  
        <br /> 

         <h2 className="MovieTileHeading">Comedies</h2>
        <div className="MovieTile">{displayComedyMovies()}</div>   
        <br />  

         <h2 className="MovieTileHeading">Action</h2>
        <div className="MovieTile">{displayActionMovies()}</div> 

 
  


      </div>
    </div>
  );
};

export default Home;