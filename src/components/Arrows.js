import React from 'react';
import FontAwesome from 'react-fontawesome';

/*Previous Arrow*/
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

/*Next Arrow*/
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