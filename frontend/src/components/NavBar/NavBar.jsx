
import { useState } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // const signOutFun = () => {

  // }

  const onLogoutHandler = (e) => {
    e.preventDefault()
    console.log("out")
    props.onLogoutHandler(e)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="NavBarcontainer">
        <div className="left">
         
          <img className="navbarLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          
          <div className="List">
          <Link to={'../Home'} className="items">HomePage</Link>
          <Link to={'../Series'} className="items">Series</Link>
          <Link to={'../Movies'} className="items">Movies</Link>
          <Link to={'../NewMovies'} className="items">New and Popular</Link>
          <Link to={'../MyList'} className="items">My List</Link>
          
          </div>

          <div className="auth">
     
      <Link to="/logout" className="items" onClick={onLogoutHandler}>Sign out</Link>
          </div>

        </div>
        </div>
    </div>
  );
};

export default Navbar;
