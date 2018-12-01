import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Components
import Movies from './Movies';


const App = () => {
  return(
    <BrowserRouter>
      <Route path="/" component={Movies} />
    </BrowserRouter>
  );  
}

export default App;
