import React from 'react';
import './App.css';
import HomeSearch from './Containers/HomeSearch';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeSearch />
    </div>
  );
}

export default App;
