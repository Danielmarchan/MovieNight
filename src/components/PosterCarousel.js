import React, {Component} from 'react';
import Slider from "react-slick";
import axios from 'axios';

/*Components*/
import PosterCarouselItem from './PosterCarouselItem';
import {NextArrow, PrevArrow} from './Arrows.js';

class PosterCarousel extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          hover: false,
          slides: this.handleCalculateSlides()
        }
    }
    
    //Methods
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
    
    handleMouseHover = () => {
        this.setState(prevState => (
            this.state.hover = !prevState.hover
        ));
    }
    
    handleCalculateSlides = () => {
        if (window.innerWidth <= 650) {
            return 3;
        }
        else if (window.innerWidth <= 850) {
            return 4;
        }
        else if (window.innerWidth <= 1000) {
            return 5;
        }
        else if (window.innerWidth <= 1250 ) {
            return 6;
        }
        else if (window.innerWidth <= 1500) {
            return 7;
        }
        else {
            return 8;
        }
    }
    
    handleUpdateSlides = () => {
        this.setState({slides: this.handleCalculateSlides()});
    }
    
    /*Mount*/
    componentDidMount = () => {
        window.addEventListener("resize", this.handleUpdateSlides);
        
        this.handleGetData(this.props.endpoint);
    }
        
    render() {
        
        /*Slider settings*/
        const settings = {
          initialSlide: 0,
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: this.state.slides,
          slidesToScroll: this.state.slides,
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
        
        /*If no data is found, load empty div*/
        if (this.state.data.length > 0) {
            return (
                <div 
                    className="carousel-container"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    <h1>{this.props.category}</h1>
                    <Slider 
                        {...settings}
                    >
                        {
                            this.state.data.map(item => {
                                if (item.overview !=="") {
                                    return(
                                        <PosterCarouselItem 
                                            item={item}
                                            setMovie={this.props.setMovie}
                                            key={item.id}
                                        />
                                    );
                                }
                            })
                        }
                    </Slider>
                  </div>
            );
        }
        else {
            return <div />;
        }
    }
}

export default PosterCarousel;