import NavBar from "../NavBar/NavBar";
import "./HomePage.css";

import jwt_decode from 'jwt-decode';

import { useEffect, useState } from 'react';





const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
const [user, setUser] = useState({})

useEffect(() => {

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

  return (
    <div className="home">
      <NavBar onLogoutHandler = {onLogoutHandler} isAuth={isAuth} user={user} />
    </div>
  );
};

export default Home;