import React from 'react';

const MovieListEntry = ({movie}) => {

  return (
    <div className="movie-title">{movie.title}</div>
  );

};

export default MovieListEntry;