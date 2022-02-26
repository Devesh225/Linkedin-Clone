import React from 'react'
import './Login.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginFooter from './LoginFooter';


function Login() {
  return (
    <div className='login'>
        <div className='login__top'>
            <div className="login__header">
                <p>Linked</p>
                <LinkedInIcon sx={{height: '3.2vw', width: '3.2vw', color: '#0a66c2'}}/>
            </div>
            <p>Make the most of your professional life</p>
        </div>
        <div className="login__form">
            <form>
                <div className="login__formInput">
                    <p>Full Name</p>
                    <input type="text"/>
                </div>
                <div className="login__formInput">
                    <p>Profile Picture Link (Optional)</p>
                    <input type="text"/>
                </div>
                <div className="login__formInput">
                    <p>Email</p>
                    <input type="email"/>
                </div>
                <div className="login__formInput">
                    <p>Password</p>
                    <input type="password"/>
                </div>
                <div className="login__formButton">
                    <button> Sign In </button>
                </div>
            </form>
            <p className='login__register'>Not a member? <span>Register</span></p>
        </div>
        <div className="login__footer">
            <LoginFooter />
        </div>
    </div>
  )
}

export default Login;