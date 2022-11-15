import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from 'axios'
import MovieCard from "../MovieCard/MovieCard";


import jwt_decode from 'jwt-decode';

import { useEffect, useState } from 'react';




const Home = () => {
  //have an array that stores featured movies, for now this array is empty
  const [movies, setMovies] = useState([])



  const grabMovies = async () =>{
    //response const returns an array of 20 movies from the movie db api inside a key called results amongst other keys
    const {response}  = await axios.get(`${process.env.REACT_APP_TMBD_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    }) 
    // console.log('response', response)
    //set the empty featured movies array to the results grabbed from API
    setMovies(response)

  }

  const [isAuth, setIsAuth] = useState(false)
const [user, setUser] = useState({})

useEffect(() => {
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


const renderMovies = () =>{
  movies.map(movie =>(
    <MovieCard/>
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