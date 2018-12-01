import React, {Component} from 'react';
import { Consumer } from './Context/context.js';

//Components
import Explore from './Explore';
import Header from './Header';
import Trending from './Trending';
import Footer from './Footer';


class Movies extends Component {
  
  render() {
    return (
      <Consumer>
        { context => {
          return (
          <div className="Movies">
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

export default Movies;