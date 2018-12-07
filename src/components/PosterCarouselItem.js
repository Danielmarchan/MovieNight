import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class PosterCarouselItem extends Component {
  
  constructor() {
        super();
        this.state = {
      name: "name",
      date: "irst_air_date",
      hover: false,
      render: 0
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
  }
  
  render() {
    /*If image src is found, use it instead of default*/
    
    let posterSrc = "https://media.comicbook.com/files/img/default-movie.png";
    
    if (this.props.item.poster_path !== "") {
        posterSrc = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.item.poster_path;
    }
    
        /*Link using id and movie/tv title with only alphanumeric characters and no spaces*/
    return (
        <Link
          to={ '/' + this.props.match.path.split('/')[1] + '/' + this.props.item.id + '/' + this.props.item[this.state.name].replace(/[^\w\s]/gi, '').replace(/\s/g, '-')}
          >
          <div 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            className="carousel-item"
          >
            <img 
                className="poster"
                src={posterSrc}
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

export default withRouter(PosterCarouselItem);