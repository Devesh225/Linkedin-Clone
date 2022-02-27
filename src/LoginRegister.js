import React, {useState} from 'react'
import './LoginRegister.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginRegisterFooter from './LoginRegisterFooter';
import { auth } from './Firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function LoginRegister() {

    const [signInSignUp, setSignInSignUp] = useState('Sign In');
    const [loginRegisterText, setLoginRegisterText] = useState('Not a member?');
    const [loginRegisterTitle, setLoginRegisterTitle] = useState('Register');
    const [fullName, setFullName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const registerUserScreen = () => {
        setSignInSignUp('Sign Up');
        setLoginRegisterText('Already a member?');
        setLoginRegisterTitle('Login'); 
    }

    const loginUserScreen = () => {
        setSignInSignUp('Sign In');
        setLoginRegisterText('Not a member?');
        setLoginRegisterTitle('Register');
    }

    const loginUser = (e) => {
        e.preventDefault(); /* Prevents from Submitting the Form */
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email, 
                displayName: userAuth.user.displayName,
                uid: userAuth.user.uid,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch((err) => alert(err));

    };

    const registerUser = (e) => {

        e.preventDefault(); /* Prevents from Submitting the Form */

        if(!fullName) {
            return alert('Please Enter a Valid Name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                /* displayName and photoURL are firebase keywords. */
                displayName: fullName,
                photoURL: profilePicture,
            })
            .then(() => {
                dispatch(login({
                    uid: userAuth.user.uid,
                    displayName: fullName,
                    email: userAuth.user.email,
                    photoURL: profilePicture, /* This is not photoURL, this is a local variable. */
                }));
            });
        }).catch(err => alert(err));
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
                    <button type='submit' onClick={signInSignUp ==='Sign Up' ? (registerUser) : (loginUser)}>{signInSignUp}</button>
                </div>
            </form>
                <p className='loginRegister__loginRegisterArea'>{loginRegisterText} <span onClick={loginRegisterTitle === 'Register' ? (registerUserScreen) : (loginUserScreen)}>{loginRegisterTitle}</span></p>
        </div>
        <div className="loginRegister__footer">
            <LoginRegisterFooter />
        </div>
    </div>
  )
}

export default LoginRegister;