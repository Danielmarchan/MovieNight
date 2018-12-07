import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PosterCarouselItem extends Component {
  
  constructor() {
        super();
        this.state = {
      name: "name",
      date: "irst_air_date",
      posterSrc: "https://media.comicbook.com/files/img/default-movie.png",
      hover: false,
    }
  }
  
  /*Methods*/
  
  handleMouseEnter = () => {
        this.setState({
            hover: true
        });
  }
  
  handleMouseLeave = () => {
        this.setState({
            hover: false
        });
  }
  
  handleGetData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US
    `)
        .then(response => {
             this.props.setMovie(response.data)
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }
  
  handleRefresh = () => {
    window.location.reload();
  }
  /*Mount*/
  componentWillMount = () => {
    
    /*Use correct attributes for movies or tv shows*/
    if (this.props.match.path.split('/')[1] === "movies") {
      this.setState({
        name: "title",
        date: "release_date"
      });
    }
    else if (this.props.match.path.split('/')[1] === "tv") {
      this.setState({
        name: "name",
        date: "first_air_date"
      });
    }
    
    /*If image src is found, use it instead of default*/  
    if (this.props.item.poster_path !== null) {
      this.setState({
        posterSrc: "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.item.poster_path
      });
    }
  }
  
  render() {
    console.log(this.props.match.url);
        /*Link using id and movie/tv title with only alphanumeric characters and no spaces*/
    return (
        <Link
          to={ '/' + this.props.match.path.split('/')[1] + '/' + this.props.item.id + '/' + this.props.item[this.state.name].replace(/[^\w\s]/gi, '').replace(/\s/g, '-')}
          onClick={this.handleRefresh}
          >
          <div 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            className="carousel-item"
          >
            <img 
                className="poster"
                src={this.state.posterSrc}
                alt={this.props.item.title}
            />
            
            {/*Hover*/}
            <div className="hover-title">
              <h3>
                {
                  this.state.hover
                    ? this.props.item[this.state.name]
                    : ""
                }
              </h3>
              <h3>
                {
                  this.state.hover
                    ? `(${this.props.item[this.state.date].substring(0, 4)})`
                    : ""
                }
              </h3>
            </div>
          </div>
        </Link>
    ); 
  }
}

export default PosterCarouselItem;