import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PosterCarouselItem extends Component {
  
  state = {
    attr: "name"
  }
  
  componentWillMount = () => {
    if (this.props.match.path === "/movies") {
      this.setState({
        attr: "title"
      });
    }
    else if (this.props.match.path === "/tv") {
      this.setState({
        attr: "name"
      });
    }
  }
  
  render() {
    return (
        <Link to={ this.props.match.path + '/' + this.props.item.id + '/' + this.props.item[this.state.attr].replace(/[^\w\s]/gi, '').replace(/\s/g, '-') }>
          <div 
            className="carousel-item"
          >
            <img 
                className="poster"
                src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.item.poster_path}
                alt={this.props.item.title}
            />
          </div>
        </Link>
    ); 
  }
}

export default PosterCarouselItem;