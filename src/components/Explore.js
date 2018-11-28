import React from 'react';
import Carousel from './Carousel';

const Explore = ({ getData }) => {
    return (
        <React.Fragment>
            {/*Now Playing*/}
            <Carousel
                category="Now Playing"
                endpoint='https://api.themoviedb.org/3/movie/now_playing?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
                getData={getData}
            />
            
            {/*Top Rated*/}
            <Carousel
                category="Top Rated"
                endpoint='https://api.themoviedb.org/3/movie/top_rated?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
                getData={getData}
            />
            
            {/*Upcoming Movies*/}
            <Carousel
                category="Upcoming Movies"
                endpoint='https://api.themoviedb.org/3/movie/upcoming?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&page=1'
                getData={getData}
            />
        </React.Fragment>
    );
} 

export default Explore;