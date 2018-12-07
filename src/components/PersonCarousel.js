import React, { Component } from "react";
import Slider from "react-slick";
import {NextArrow, PrevArrow} from './Arrows.js';
import axios from 'axios';

class PersonCarousel extends Component {
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
                    data: response.data[this.props.people]
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
        
    /*Slider setiings*/
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
    
    /*If no data is found, render empty div*/
    if (this.state.data.length != 0) {
        return (
            <div className="person-carousel">
                <h1>Cast</h1>
                <div 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    className="person-container"
                  >
                    <Slider {...settings}>
                        {
                            this.state.data.map(item => {
                            
                                /*If image src is not found, use default image*/
                                let profileSrc = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_.png";
                                
                                if (item.profile_path != null) {
                                    profileSrc = `https://image.tmdb.org/t/p/w185${item.profile_path}`;
                                }
                            
                                return(
                                <div key={item.id} >
                                    <div className="person-item">
                                        <img 
                                            src={profileSrc}
                                            alt={item.name}
                                        />
                                        <div className="person-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.character}</p>
                                        </div>
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
        return <div />;
    }
  }
}

export default PersonCarousel;