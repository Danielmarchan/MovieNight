import React from 'react';
import Slider from "react-slick";
import FontAwesome from 'react-fontawesome';

export const PrevArrow = ({ onClick, currentSlide }) => {
    return (
        <div 
        className="prev-arrow"
        onClick={onClick}
        >
            <FontAwesome className="arrow-icon" name="chevron-left" />
        </div>   
    );
}


export const NextArrow = ({ onClick, currentSlide, slidesToShow, slideCount }) => {
    return (
        <div 
        className="next-arrow"
        onClick={onClick}
        >
            <FontAwesome className="arrow-icon" name="chevron-right" />
        </div>   
    );
}