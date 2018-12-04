import React, {Component} from 'react';

//Components
import PosterCarousel from './PosterCarousel';
import Trending from './Trending';


class Movies extends Component {
  
  render() {
    return (
    <div className="Movies">
      <Trending 
        endpoint="https://api.themoviedb.org/3/movie/popular?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1"  
        match={this.props.match}
      />
      {/*Now Playing*/}
      <PosterCarousel
          category="Now Playing"
          endpoint='https://api.themoviedb.org/3/movie/now_playing?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          match={this.props.match}
      />
      
      {/*Top Rated*/}
      <PosterCarousel
          category="Top Rated"
          endpoint='https://api.themoviedb.org/3/movie/top_rated?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          match={this.props.match}
      />
      
      {/*Upcoming Movies*/}
      <PosterCarousel
          category="Upcoming Movies"
          endpoint='https://api.themoviedb.org/3/movie/upcoming?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1' 
          match={this.props.match}
      />
      
      {/*Dramas*/}
      <PosterCarousel
          category="Dramas"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18'
          match={this.props.match}
      />
      
      {/*Thrillers*/}
      <PosterCarousel
          category="Thrillers"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&without_genres=35'
          match={this.props.match}
      />
      
      {/*Comedies*/}
      <PosterCarousel
          category="Comedies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&without_genres=53'
          match={this.props.match}
      />
      
      {/*Action Movies*/}
      <PosterCarousel
          category="Action Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28'
          match={this.props.match}
      />
      
      {/*Horror Movies*/}
      <PosterCarousel
          category="Horror Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&without_genres=10751'
          match={this.props.match}
      />
      
      {/*Documentaries*/}
      <PosterCarousel
          category="Documentaries"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99'
          match={this.props.match}
      />
      
      {/*Animated Movies*/}
      <PosterCarousel
          category="Animated Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16'
          match={this.props.match}
      />
    </div>
    );
  }
  
}

export default Movies;