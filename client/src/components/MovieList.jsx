import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({movies}) => {
  // in react, && is like.... "then do this"...?
    // and if that condition fails, there is no ||, we just proceed to the mapping...

  // but if we don't want to mess with that, we stick the ternary...
    // return `right here ?` (...) `: and here`

  return (
    <div className="movie-list">
      {!movies.length &&
      <div>Sorry, I couldn't find any movies that match your search...</div>}
      {movies.map(movie =><MovieListEntry movie={movie}/>)}
    </div>
  )

};

export default MovieList;