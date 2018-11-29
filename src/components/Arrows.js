import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PrevArrow = ({ onClick, currentSlide }) => {
    return (
        <div 
        className="prev-arrow"
        onClick={onClick}
        >
            <FontAwesomeIcon icon="stroopwafel" />
        </div>   
    );
}


export const NextArrow = ({ onClick, currentSlide, slidesToShow, slideCount }) => {
    return (
        <div 
        className="next-arrow"
        onClick={onClick}
        >
            <FontAwesomeIcon icon="stroopwafel" />
        </div>   
    );
}