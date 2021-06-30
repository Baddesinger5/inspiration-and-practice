import React from 'react';
import './App.css';
import SearchPage from './searchPage/SearchPage';
import {Route} from 'react-router-dom';
import MainPage from './mainPage/MainPage';


function App() {

  return (
    <div className="App">
      <Route path="/" exact component={MainPage}/>
      <Route path="/search" component={SearchPage}/>
    </div>
  );
}

export default App;
