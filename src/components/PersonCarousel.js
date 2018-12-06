import React, { Component } from "react";
import Slider from "react-slick";
import {NextArrow, PrevArrow} from './Arrows.js';
import axios from 'axios';

class PersonCarousel extends Component {
    state = {
        data: [],
        hover: false,
    }
    
    //Method
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
    
    componentDidMount = () => {
        this.handleGetData(this.props.endpoint);
    }
    
    render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      autoplay: false,
      speed: 2500,
      arrows: true,
      nextArrow: <NextArrow hover={this.state.hover} />,
      prevArrow: <PrevArrow hover={this.state.hover} />
    };
    
    if (this.state.data.length != 0) {
        console.log(this.state.data.length);
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
                            
                                let profileSrc = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_.png";
                                
                                if (item.profile_path != null) {
                                    profileSrc = `https://image.tmdb.org/t/p/w185${item.profile_path}`;
                                }
                            
                                return(
                                <div>
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