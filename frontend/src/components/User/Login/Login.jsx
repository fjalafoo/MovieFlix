import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function Login(props) {

  const [newUser, setNewUser] = useState({})

  const changeHandler = (e) =>{
      const user = {...newUser }
      user[e.target.name] = e.target.value
      console.log(user)
      setNewUser(user)
  }

  const loginHandler = (e) =>{
      e.preventDefault()
      props.login(newUser)
  }


    return (
      //div of the entire Login page
      <div className='signIn'>

        {/* header section starts here */}
          {/* <div className='header'> */}
            {/* <img
            // netflix logo on the left
              className='NetflixLogo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158'
            /> */}
          {/* </div> */}
          {/* header section ends here */}



     {/* Login page components start here  */}
        <div className="loginContainer">
            <h1>Sign In</h1>
            <form onSubmit={loginHandler} className='loginForm'>
            <input className="formItems" name='email' type="email" value={newUser.email} onChange={changeHandler} placeholder="Email or phone number" />
            <input className="formItems"  name='password' type="password" value={newUser.password} onChange={changeHandler} placeholder="Password" />
            <button type='submit' className="loginButton">Sign In</button>
            </form>
            <span>
              New to Netflix? <b><Link to='/signup'>Sign up now.</Link></b>
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