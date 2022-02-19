import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomeSidebar from './components/homeSidebar/HomeSidebar';
import HomeFeed from './components/homeFeed/HomeFeed';

function App() {
  return (
    <div className="app">
      <Header />
      {/* {Home} */}
      <div className="app__home">
        <HomeSidebar className='app__homeSidebar' />
        <HomeFeed className='app__homeFeed'/>
        {/* {Home Widgets} */}
      </div>
    </div>
  );
}

export default App;
