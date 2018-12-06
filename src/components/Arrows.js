import React from 'react';
import Slider from "react-slick";
import FontAwesome from 'react-fontawesome';

export const PrevArrow = ({ onClick, hover }) => {
    if (hover) {
        return (
            <div 
            className="prev-arrow"
            onClick={onClick}
            >
                <FontAwesome className="arrow-icon" name="chevron-left" />
            </div>   
        );
    }
    else {
        return <div></div>;
    }
}


export const NextArrow = ({ onClick, hover }) => {
    if (hover) {
        return (
            <div 
            className="next-arrow"
            onClick={onClick}
            >
                <FontAwesome className="arrow-icon" name="chevron-right" />
            </div>   
        );    
    }
    else {
        return <div></div>;
    }
}