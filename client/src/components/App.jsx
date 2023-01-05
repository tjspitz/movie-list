import React from 'react';

const App = () => {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];


  return (
    <>
      <h1 className="title">MovieList</h1>
       <MovieList movies={movies}/>
    </>
  )

};

const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {movies.map(movie =><MovieListEntry movie={movie}/>)}
    </div>
  );

};

const MovieListEntry = ({movie}) => {
  return (
    <div className="movie-title">{movie.title}</div>
  );

};

export default App;