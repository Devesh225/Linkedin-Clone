import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import HomeSidebar from './components/homeSidebar/HomeSidebar';
import HomeFeed from './components/homeFeed/HomeFeed';
import HomeWidgets from './components/homeWidgets/HomeWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import LoginRegister from './LoginRegister';
import { auth } from './Firebase/firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => { /* userAuth is the callback we recieve. */
      if(userAuth) {
        /* The user is Logged in. */
        dispatch(login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
        }));
      } else {
        /* The user is Logged out. */
        dispatch(logout());
      }
    }) /* A listener which listens to any type of Authentication Change. */
  }, []); /* Empty dependency array because we only want it to run once when the App loads. */
  return (
    <div className="app">
      { !user ? ( <LoginRegister /> ) : (
        <Fragment>
          <Header/>
          <div className="app__home">
            <HomeSidebar className='app__homeSidebar' />
            <HomeFeed className='app__homeFeed'/>
            <HomeWidgets className='app__homeWidgets'/>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
