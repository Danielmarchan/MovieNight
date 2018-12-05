import React from 'react';
import FontAwesome from 'react-fontawesome';

const TopCard = ({posterSrc, name, year, rating, genres, summary}) => {
    return (
        <div
            className="top-card"
        >
            <div className="grid-card">
                <div className="poster-div">
                    <img
                        className="grid-poster"
                        src={posterSrc}
                    />
                </div>
                    <div>
                    <div>
                        <h1>{name}</h1>
                    </div>
                    <div>
                        <h2>{ `(${year})` }</h2>
                    </div>
                    <div className="rating-div">
                        <FontAwesome name="star" />
                        <h3>{ `${rating} Average Rating` }</h3>
                    </div>
                    <div>
                        <h3>{ genres }</h3>
                    </div>
                </div>
            </div>
            <div className="summary">
                <h1>Summary</h1>
                <p>{ summary }</p>
            </div>
        </div>    
    );
}

export default TopCard;