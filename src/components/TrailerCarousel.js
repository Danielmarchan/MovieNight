import React, { PureComponent } from "react";
import Slider from "react-slick";
import axios from 'axios';

/*Components*/
import {NextArrow, PrevArrow} from './Arrows.js';

class TrailerCarousel extends PureComponent {
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
      this.setState(prevState => ({
          hover: !prevState.hover
      }));
    }
    
    handleCalculateSlides = () => {
        
        if (window.innerWidth <= 500) {
            return 1;
        }
        else if (window.innerWidth <= 850) {
            return 2;
        }
        else if (window.innerWidth <= 1200) {
            return 3;
        }
        else {
            return 4;
        }
    }
    
    handleUpdateSlides = () => {
        this.setState({slides: this.handleCalculateSlides()});
    }
    
    /*Mount*/
    componentWillMount = () => {
        window.addEventListener("resize", this.handleUpdateSlides);
        
        this.handleGetData(this.props.endpoint);
    }
    
    /*Update*/
    componentDidUpdate = () => {
        this.handleGetData(this.props.endpoint);
    }
    
    render() {
    /*Slider settings*/
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.state.slides,
      slidesToScroll: this.state.slides,
      autoplay: false,
      speed: 2500,
      arrows: true,
      nextArrow: <NextArrow hover={this.state.hover} />,
      prevArrow: <PrevArrow hover={this.state.hover} />
    };
    
    /*If no data is found, load empty div*/
    if (this.state.data.length != 0) {
        return (
            <div className="trailer-carousel">
                <h1>Trailers</h1>
                <div 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    className="trailer-container"
                  >
                    <Slider {...settings}>
                        {
                            this.state.data.map(item => {
                            
                                return(
                                <div
                                    key={item.id}
                                    className="trailer-container"
                                >
                                    <div className="trailer-item">
                                        <iframe src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
    else {
        return <div />
    }
  }
}

export default TrailerCarousel;