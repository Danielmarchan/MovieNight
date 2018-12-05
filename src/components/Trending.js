import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import {NextArrow, PrevArrow} from './Arrows.js';
import axios from 'axios';

class Trending extends Component {
    
    constructor() {
        super();
        this.state = {
          data: [],
          name: "title",
          format: "Movies",
          hover: false,
        }
    }
    
    //Method
    handleGetData = (endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                 this.setState({
                    data: response.data.results
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    componentWillMount = () => {
        this.handleGetData(this.props.endpoint);
        
        if (this.props.match.path === "/movies") {
          this.setState({
            name: "title",
            format: "Movies"
          });
        }
        else if (this.props.match.path === "/tv") {
          this.setState({
            name: "name",
            format: "TV Shows"
          });
        }
    }
    
    handleMouseHover = () => {
      this.setState(prevState => (
          this.state.hover = !prevState.hover
      ));
    }
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 5000,
      arrows: true,
      nextArrow: <NextArrow hover={this.state.hover} />,
      prevArrow: <PrevArrow hover={this.state.hover} />
    };
    return (
      <div 
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
        className="trending-container"
      >
        <Slider {...settings}>
            {
                this.state.data.map(item => {
                
                    let backdropSrc = "https://ak9.picdn.net/shutterstock/videos/14759539/thumb/1.jpg"
                
                    if (item.backdrop_path !== null) {
                      backdropSrc = "https://image.tmdb.org/t/p/w1280" + item.backdrop_path;
                    }
                
                    return(
                        <Link to={ this.props.match.path + '/' + item.id + '/' + item[this.state.  name].replace(/[^\w\s]/gi, '').replace(/\s/g, '-') }>
                            <div className="trending-item">
                                <img 
                                    className="trending-image"
                                    src={backdropSrc}
                                    alt={item[this.state.  name]}
                                />
                                <div className="trending-info">
                                    <h3>Popular {this.state.format}</h3>
                                    <h1>{item[this.state.  name]}</h1>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </Slider>
      </div>
    );
  }
}

export default Trending;