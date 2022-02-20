import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomeSidebar from './components/homeSidebar/HomeSidebar';
import HomeFeed from './components/homeFeed/HomeFeed';
import HomeWidgets from './components/homeWidgets/HomeWidgets';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__home">
        <HomeSidebar className='app__homeSidebar' />
        <HomeFeed className='app__homeFeed'/>
        <HomeWidgets className='app__homeWidgets'/>
      </div>
    </div>
  );
}

export default App;
