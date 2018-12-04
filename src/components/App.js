import React from 'react';
import '../App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

//Components
import Movies from './Movies';
import Header from './Header';
import Footer from './Footer';
import Tv from './Tv';
import MovieInfo from './MovieInfo';
import TvInfo from './TvInfo';
import NotFound from './NotFound';


const App = () => {
  return(
    <div className="app">
    
      <Header />
      
        <Switch>
        
          <Route exact path="/" render={() => <Redirect to="/movies" />} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:id" component={MovieInfo} />
          <Route exact path="/tv" component={Tv} />
          <Route path="/tv/:id" component={TvInfo} />
          <Route component={NotFound} />
          
        </Switch>
      
      <Footer />
      
    </div>
  );  
}

export default App;
