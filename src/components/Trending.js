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
          attr: "title",
          format: "Movies",
          hover: false
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
            attr: "title",
            format: "Movies"
          });
        }
        else if (this.props.match.path === "/tv") {
          this.setState({
            attr: "name",
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
                    return(
                        <Link to={ this.props.match.path + '/' + item.id + '/' + item[this.state.attr].replace(/[^\w\s]/gi, '').replace(/\s/g, '-') }>
                            <div className="trending-item">
                                <img 
                                    className="trending-image"
                                    src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
                                    alt={item[this.state.attr]}
                                />
                                <div className="trending-info">
                                    <h3>Popular {this.state.format}</h3>
                                    <h1>{item[this.state.attr]}</h1>
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