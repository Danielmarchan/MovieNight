import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Consumer } from './Context/context.js';

//Components
import Carousel from './Carousel';
import Explore from './Explore';
import Header from './Header';
import Trending from './Trending';
import Footer from './Footer';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);

class App extends Component {
  
  render() {
    return (
      <Consumer>
        { context => {
          return (
            <div className="App">
              <Header />
              <Trending getData={context.actions.getData} />
              <Explore getData={context.actions.getData} />
              <Footer />
            </div>
          );
      }}
      </Consumer>
    );
  }
  
}

export default App;