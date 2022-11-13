import React from 'react'
import './SignUp.css'

function SignUp() {
  return (



    //div of the entire signup page
    <div className='signUp'>




      {/* header section starts here */}
      <div className='header'>
        {/* NETFLIX logo on the left*/}
          <img
          className='NetflixLogo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158'>
          </img>
        {/* signin button on the right */}
        <button className='signInButton'>Sign In</button>
      </div>
      {/* header section ends here */}


      {/* signup page components start here  */}
      <div className='container'>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>

      <div className='emailInputField'>
        {/* add a hint for the user to enter their email address */}
        <input type='email' placeholder='Email address'></input>
        <button className='signUpButton'>Get Started</button>
      </div>

      </div>
      {/* signup page components end here  */}




    </div>
  )
}

export default SignUp