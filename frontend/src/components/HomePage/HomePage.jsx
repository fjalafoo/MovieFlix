import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from 'axios'
import MovieCard from "../MovieCard/MovieCard";


import jwt_decode from 'jwt-decode';

import { useEffect, useState } from 'react';




const Home = () => {
  //have an array that stores featured movies, for now this array is empty
  const [movies, setMovies] = useState([])



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

  }

  const [isAuth, setIsAuth] = useState(false)
const [user, setUser] = useState({})

//runs whenever the homepage is loaded
useEffect(() => {
  //call grabmovies method
  grabMovies()
  let token = localStorage.getItem("token")

  if(token != null){
    let user = jwt_decode(token)

    if(user){
      setIsAuth(true)
      setUser(user)
    }
    else if(!user){
      localStorage.removeItem("token")
      setIsAuth(false)
    }
  }
}, [])


const onLogoutHandler = (e) =>{
  e.preventDefault()
  localStorage.removeItem("token")
  setIsAuth(false)
  setUser(null)
}

//function that displays movies
const renderMovies = () =>{
  //mapping the movies on to our empty movies array to populate it
  return movies.map(movie =>(
    //display movie card page as element here
    <MovieCard
    key={movie.id}
    movie={movie}
    />
  ))
}
  return (
    <div className="home">
      <NavBar onLogoutHandler = {onLogoutHandler} isAuth={isAuth} user={user} />
      <div className="featuredMoviesContainer">
        {/* call a function that display movies  */}
        {renderMovies()}
      </div>
    </div>
  );
};

export default Home;