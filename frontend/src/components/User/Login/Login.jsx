import React from 'react'
import './Login.css'




function Login() {
    return (
      //div of the entire Login page
      <div className='signIn'>

        {/* header section starts here */}
          <div className='header'>
            <img
            // netflix logo on the left
              className='NetflixLogo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158'
            />
          </div>
          {/* header section ends here */}



     {/* Login page components start here  */}
        <div className="loginContainer">
            <h1>Sign In</h1>
            <form className='loginForm'>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            </form>
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
        </div>
        {/* Login page components end here */}



      </div>
    );
}

export default Login