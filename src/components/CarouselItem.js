import React from 'react';

const CarouselItem = ({movie}) => {
  return (
    <div 
      className="carousel-item"
    >
      <img 
          className="poster"
          src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path}
          alt={movie.title}
      />
    </div>
  );
}

export default CarouselItem;