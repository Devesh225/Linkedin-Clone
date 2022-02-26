import React, {useState} from 'react'
import './LoginRegister.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginRegisterFooter from './LoginRegisterFooter';
import { auth } from './Firebase/firebase';


function LoginRegister( {type} ) {

    const [signInSignUp, setSignInSignUp] = useState('Sign In');
    const [loginRegisterText, setLoginRegisterText] = useState('Not a member?');
    const [loginRegisterTitle, setLoginRegisterTitle] = useState('Register');
    const [fullName, setFullName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault(); /* Prevents from Submitting the Form */
        setSignInSignUp('Sign In');
        setLoginRegisterText('Not a member?');
        setLoginRegisterTitle('Register');
    };

    const registerUser = () => {
        setSignInSignUp('Sign Up');
        setLoginRegisterText('Already a member?');
        setLoginRegisterTitle('Login');
    };

  return (
    <div className='loginRegister'>
        <div className='loginRegister__top'>
            <div className="loginRegister__header">
                <p>Linked</p>
                <LinkedInIcon sx={{height: '3.2vw', width: '3.2vw', color: '#0a66c2'}}/>
            </div>
            <p>Make the most of your professional life</p>
        </div>
        <div className="loginRegister__form">
            <form>
                <div className="loginRegister__formInput">
                    <p>Full Name</p>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className="loginRegister__formInput">
                    <p>Profile Picture Link (Optional)</p>
                    <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)}/>
                </div>
                <div className="loginRegister__formInput">
                    <p>Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="loginRegister__formInput">
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="loginRegister__formButton">
                    <button type='submit' onClick={loginUser}>{signInSignUp}</button>
                </div>
            </form>
                <p className='loginRegister__loginRegisterArea'>{loginRegisterText} <span onClick={loginRegisterTitle == 'Register' ? (registerUser) : (loginUser)}>{loginRegisterTitle}</span></p>
        </div>
        <div className="loginRegister__footer">
            <LoginRegisterFooter />
        </div>
    </div>
  )
}

export default LoginRegister;