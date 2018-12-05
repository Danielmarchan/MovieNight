import React, {Component} from 'react';
import axios from 'axios';
import TopCard from './TopCard';
import TrailerCarousel from './TrailerCarousel';
import ActorCarousel from './ActorCarousel';

class MovieInfo extends Component {
    
    state = {
        movie: {},
        name: "",
        backdropSrc: () => (""),
        posterSrc: () => (""),
        year: "",
        rating: "",
        genres: "",
        summary: "",
        director: "",
        producers: "",
        writers: ""
    }
    
    //Method
    handleGetData = () => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US
`)
            .then(response => {
                 this.setState({
                    movie: response.data,
                    name: response.data.title,
                    backdropSrc: () => {
                            if (response.data.backdrop_path === null) {
                                return "https://ak9.picdn.net/shutterstock/videos/14759539/thumb/1.jpg";
                            }
                            else {
                                return "https://image.tmdb.org/t/p/w1280" + response.data.backdrop_path;
                            }
                        },
                    posterSrc: () => {
                            if (response.data.poster_path === null) {
                                return "https://media.comicbook.com/files/img/default-movie.png";
                            }
                            else {
                                return "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + response.data.poster_path;
                            }
                        },
                    year: response.data.release_date.substring(0, 4),
                    rating: response.data.vote_average,
                    genres: response.data.genres.map(genre => genre.name).join(', '),
                    summary: response.data.overview
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    componentDidMount = () => {
        this.handleGetData();
    }
    
    render () {
        return(
            <div>
                <img 
                    className="info-image"
                    src={this.state.backdropSrc()}
                />
                <div className="div-info">
                    <TopCard 
                        posterSrc={this.state.posterSrc()}
                        name={this.state.name}
                        year={this.state.year}
                        rating={this.state.rating}
                        genres={this.state.genres}
                        summary={this.state.summary}
                    />
                </div>
            </div>
        );
    }
}

export default MovieInfo;