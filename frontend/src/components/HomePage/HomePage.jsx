import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from 'axios'
import { useEffect } from "react";



const Home = () => {
  const grabMovies = async () =>{
    const response  = await axios.get(`${process.env.TMBD_BASE_URL}/discover/movie`, {
      params: {
        API_KEY: process.env.API_KEY
      }
    }) 
    console.log("The response isssssss")
    console.log('response', response)

  }

  useEffect( ()=> {
    grabMovies()
  }, [])
  return (
    <div className="home">
      <NavBar />
    </div>
  );
};

export default Home;