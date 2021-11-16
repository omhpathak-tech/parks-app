import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import SearchPark from './components/SearchPark'
import ParkCards from './components/ParkCards';
import Webcam from './components/Webcam';
function App() {
  return (
    <div>
      <h4 className="header"> NPS App </h4>
    <Search id = "Search">
    </Search>
    <SearchPark></SearchPark>
    
    <ParkCards></ParkCards>
    <Webcam></Webcam>
    </div>
 
  );
}

export default App;
