import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import HomeSidebar from './components/homeSidebar/HomeSidebar';
import HomeFeed from './components/homeFeed/HomeFeed';
import HomeWidgets from './components/homeWidgets/HomeWidgets';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      { !user ? ( <Login /> ) : (
        <Fragment>
          <Header />
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
