import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PosterCarouselItem extends Component {
  
  state = {
      name: "name",
    date: "irst_air_date",
    posterSrc: "https://media.comicbook.com/files/img/default-movie.png",
    hover: false
  }
  
  componentWillMount = () => {
    if (this.props.match.path === "/movies") {
      this.setState({
          name: "title",
        date: "release_date"
      });
    }
    else if (this.props.match.path === "/tv") {
      this.setState({
          name: "name",
        date: "first_air_date"
      });
    }
      
    if (this.props.item.poster_path !== null) {
      this.setState({
        posterSrc: "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.item.poster_path
      });
    }
  }
  
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
  
  render() {
    return (
        <Link to={ this.props.match.path + '/' + this.props.item.id + '/' + this.props.item[this.state.  name].replace(/[^\w\s]/gi, '').replace(/\s/g, '-') }>
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