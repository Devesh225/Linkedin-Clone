import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomeSidebar from './components/homeSidebar/HomeSidebar';

function App() {
  return (
    <div className="app">
      <Header />
      {/* {Home} */}
      <div className="app__home">
        <HomeSidebar className='app__homeSidebar' />
        {/* {Home Feed} */}
        {/* {Home Widgets} */}
      </div>
    </div>
  );
}

export default App;
