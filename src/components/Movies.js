import React, {PureComponent} from 'react';

//Components
import PosterCarousel from './PosterCarousel';
import Trending from './Trending';


class Movies extends PureComponent {
  
  render() {
    
    const props = {
      match: this.props.match,
      media: "movie"
    };
    
    return (
    <div className="Movies">
      <Trending 
        endpoint="https://api.themoviedb.org/3/movie/popular?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1"
        {...props}
        
      />
      
      {/*Now Playing*/}
      <PosterCarousel
          category="Now Playing"
          endpoint='https://api.themoviedb.org/3/movie/now_playing?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          {...props}
      />
      
      {/*Top Rated*/}
      <PosterCarousel
          category="Top Rated"
          endpoint='https://api.themoviedb.org/3/movie/top_rated?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
          {...props}
          
      />
      
      {/*Upcoming Movies*/}
      <PosterCarousel
          category="Upcoming Movies"
          endpoint='https://api.themoviedb.org/3/movie/upcoming?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1' 
          {...props}
      />
      
      {/*Dramas*/}
      <PosterCarousel
          category="Dramas"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18'
          {...props}
      />
      
      {/*Thrillers*/}
      <PosterCarousel
          category="Thrillers"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&without_genres=35'
          {...props}
      />
      
      {/*Comedies*/}
      <PosterCarousel
          category="Comedies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&without_genres=53'
          {...props}
      />
      
      {/*Action Movies*/}
      <PosterCarousel
          category="Action Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28'
          {...props}
      />
      
      {/*Horror Movies*/}
      <PosterCarousel
          category="Horror Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&without_genres=10751'
          {...props}
      />
      
      {/*Animated Movies*/}
      <PosterCarousel
          category="Animated Movies"
          endpoint='https://api.themoviedb.org/3/discover/movie?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16'
          {...props}
      />
    </div>
    );
  }
  
}

export default Movies;