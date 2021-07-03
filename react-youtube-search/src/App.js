import React from 'react';
import { Route } from 'react-router-dom';
import MainScreen from './components/mainScreen/MainScreen';
import SearchScreen from './components/searchScreen/SearchScreen';

function App() {
  return (
    <div className="App-wrapper">
      <Route  path="/" exact component={MainScreen}/>
      <Route  path="/search" component={SearchScreen}/>
    </div>
  );
}

export default App;
