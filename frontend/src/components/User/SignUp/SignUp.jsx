import React from 'react'
import './SignUp.css'
import {useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom";



function SignUp(props) {
  const [newUser, setNewUser] = useState({})
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const navigate = useNavigate()
    const changeHandler = (e) =>{
        const user = {...newUser }
        user[e.target.name] = e.target.value
        console.log(user)
        setNewUser(user)
    }

    const registerHandler = (e) =>{
      e.preventDefault()
        props.register(newUser)
        // navigate('/home)
        navigate("/home")
        debugger
    }
    
    const emailSubmit = () => {
      setEmailSubmitted(true)
    }


  return (



    //div of the entire signup page
    <div className='signUp'>




      {/* header section starts here */}
      <div className='header'>
        {/* NETFLIX logo on the left*/}
          <img alt=""
          className='NetflixLogo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158'>
          </img>
        {/* signin button on the right */}
        <button className='signInButton'>Sign In</button>
      </div>
      {/* header section ends here */}


      {/* signup page components start here  */}
      <div className='signUpContainer'>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>


      
      {!emailSubmitted ? (
        <div className='emailInputField'>
        {/* add a hint for the user to enter their email address */}
        <input name='email' type='email' placeholder='Email address' onChange={changeHandler}></input>
        <button className='signUpButton' onClick={emailSubmit}>Get Started</button>
      </div>
      ): (
        <form className='emailInputField'>
             {/* add a hint for the user to enter their email address */}
             <input name='password' type='password' placeholder='Password' onChange={changeHandler}></input>
             <button className='signUpButton' onClick={registerHandler}>Start</button>
           </form>

      )}

      </div>
      {/* signup page components end here  */}




    </div>
  )
}

export default SignUp