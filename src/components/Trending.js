import React, { Component } from "react";
import Slider from "react-slick";

class Trending extends Component {
    
    constructor() {
        super();
        this.state = {
          data: []
        }
    }
    
    //Methods
    componentDidMount = () => {
        this.props.getData(this, "https://api.themoviedb.org/3/movie/popular?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1");
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
      arrows: false
    };
    return (
      <div className="trending-container">
        <Slider {...settings}>
            {
                this.state.data.map(item => {
                    return(
                        <div className="trending-item">
                            <img 
                                className="trending-image"
                                src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
                                alt={item.original_title}
                            />
                            <div className="trending-info">
                                <h3>Popular</h3>
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    );
                })
            }
        </Slider>
      </div>
    );
  }
}

export default Trending;