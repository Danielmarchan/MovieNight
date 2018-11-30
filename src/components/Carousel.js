import React, {Component} from 'react';
import CarouselItem from './CarouselItem';
import Slider from "react-slick";
import {NextArrow, PrevArrow} from './Arrows.js';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
          data: []
        }
    }
    
    //Methods
    componentDidMount = () => {
        this.props.getData(this, this.props.endpoint);
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
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
          
        };
        return (
            <div className="carousel-container">
                <h2>{this.props.category}</h2>
                <Slider {...settings}>
                    {
                        this.state.data.map(movie => {
                            return(
                                <CarouselItem movie={movie} />
                            );
                        })
                    }
                </Slider>
              </div>
        );
    }
}

export default Carousel;