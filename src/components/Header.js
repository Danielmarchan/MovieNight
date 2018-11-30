import React from'react';
import FontAwesome from 'react-fontawesome';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"><span className="blue-text">Movie</span>Night</h1>
            <div className="tabs">
                <h3>Movies</h3>
                <h3>TV Shows</h3>
            </div>
            <div className="search">
                <FontAwesome className="search-icon" name='search' />
                <h3>Search</h3>
            </div>
        </div>
    );
}

export default Header;