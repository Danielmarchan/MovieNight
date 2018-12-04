import React, {Component} from 'react';
import PosterCarouselItem from './PosterCarouselItem';
import Slider from "react-slick";
import {NextArrow, PrevArrow} from './Arrows.js';
import axios from 'axios';

class PosterCarousel extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
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
    
    //Methods
    componentDidMount = () => {
        this.handleGetData(this.props.endpoint);
    }
    
    handleMouseHover = () => {
        this.setState(prevState => (
            this.state.hover = !prevState.hover
        ));
    }
        
    render() {
        const settings = {
          initialSlide: 0,
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 8,
          accesibility: true,
          adaptiveHeight: false,
          arrows: true,
          autoplay:false,
          centerPadding: "60px",
          cssEase: "ease",
          easing: "linear",
          edgeFriction: 0.35,
          fade: false,
          focusOnSelect: false,
          swipe: true,
          nextArrow: <NextArrow hover={this.state.hover} />,
          prevArrow: <PrevArrow hover={this.state.hover} />
          
        };
        return (
            <div 
                className="carousel-container"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                <h2>{this.props.category}</h2>
                <Slider 
                    {...settings}
                >
                    {
                        this.state.data.map(item => {
                            return(
                                <PosterCarouselItem 
                                    item={item}
                                    match={this.props.match}    
                                />
                            );
                        })
                    }
                </Slider>
              </div>
        );
    }
}

export default PosterCarousel;