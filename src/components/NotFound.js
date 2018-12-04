import React from 'react';
import FontAwesome from 'react-fontawesome';

const NotFound = () => {
    return (
        <div className="not-found">
            <FontAwesome name="exclamation" className="not-found-icon" />
            <h1>Not Found</h1>
        </div>  
    );
}

export default NotFound;
