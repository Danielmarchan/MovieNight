import React, {Component} from 'react';
import axios from 'axios';

/*Components*/
import TopCard from './TopCard';
import TrailerCarousel from './TrailerCarousel';
import PersonCarousel from './PersonCarousel';
import PosterCarousel from './PosterCarousel';

class TvInfo extends Component {
    
    state = {
        show: {},
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
    
    //Methods
    handleGetData = () => {
        axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US`)
            .then(response => {
                 this.handleSetShow(response.data)
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    handleSetShow = (show) => {
        this.setState({
            show: show,
            name: show.name,
            backdropSrc: () => {
                    if (show.backdrop_path === null) {
                        return "https://ak9.picdn.net/shutterstock/videos/14759539/thumb/1.jpg";
                    }
                    else {
                        return "https://image.tmdb.org/t/p/w1280" + show.backdrop_path;
                    }
                },
            posterSrc: () => {
                    if (show.poster_path === null) {
                        return "https://media.comicbook.com/files/img/default-show.png";
                    }
                    else {
                        return "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + show.poster_path;
                    }
                },
            year: show.first_air_date.substring(0, 4),
            rating: show.vote_average,
            genres: show.genres.map(genre => genre.name).join(', '),
            summary: show.overview
        });
    }
    
    /*Mount*/
    componentDidMount = () => {
        this.handleGetData();
    }
    
    render () {
        return(
            <div>
            
                {/*Backdrop*/}
                <img 
                    className="info-image"
                    src={this.state.backdropSrc()}
                    alt={this.state.name}
                />
                <div className="div-info">
                    
                    {/*Top Card with Info*/}
                    <TopCard 
                        posterSrc={this.state.posterSrc()}
                        name={this.state.name}
                        year={this.state.year}
                        rating={this.state.rating}
                        genres={this.state.genres}
                        summary={this.state.summary}
                    />
                    
                    {/*Summary*/}
                    <div className="summary">
                        <h1>Summary</h1>
                        <p>{ this.state.summary }</p>
                    </div>
                    
                    {/*Cast*/}
                    <PersonCarousel
                        people="cast"
                        endpoint={`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=9512b36f031887e7c9ad226e2c26a6b2`}
                    />
                    
                    {/*Trailers*/}
                    <TrailerCarousel 
                        id={this.props.match.params.id}
                        endpoint={`https://api.themoviedb.org/3/tv/${this.props.match.params.id}/videos?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US`}
                    />
                    
                    {/*Similar TV Shows*/}
                    <PosterCarousel 
                        category="Similar TV Shows"
                        endpoint={`https://api.themoviedb.org/3/tv/${this.props.match.params.id}/similar?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1`}
                        setMovie={this.handleSetMovie}
                    />
                </div>
            </div>
        );
    }
}

export default TvInfo;