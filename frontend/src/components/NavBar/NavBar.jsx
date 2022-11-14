
import { useState } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="NavBarcontainer">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className="List">
          <span className="items">Homepage</span>
          <span className="items">Series</span>
          <span className="items">Movies</span>
          <span className="items">New and Popular</span>
          <span className="items">My List</span>
          </div>

          <div className="auth">
      <a><Link to="/signup">Sign out</Link></a>
          </div>

        </div>
        </div>
    </div>
  );
};

export default Navbar;
