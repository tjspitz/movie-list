import React from 'react';

const MovieListEntry = ({movie, onClick}) => {

  const updateWatch = movie => onClick(movie);

  return (
    <div className="movie-title">
      {movie.title}
      <button className="btn watch-toggle"
        onClick={() => updateWatch(movie)}
        style={movie.watched ? {background: '#59eba5'} : null}
        >
        {movie.watched ? 'Watched' : 'Unwatched'}
      </button>
    </div>
  );

};

export default MovieListEntry;