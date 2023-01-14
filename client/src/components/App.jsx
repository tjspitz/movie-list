
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddNewMovie from './AddNewMovie.jsx';

const App = () => {

  // =================== STATES ===================
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(0);
  const [search, setSearch] = useState('');
  const [movieName, setMovieName] = useState('');

  // =================== EFFECTS ===================
  // re-render the page whenever a movie is added
  useEffect(() => {reRender()}, [onAddMovieClick]);

  // =================== HELPERS ===================
  const reRender = () => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
        console.log(response.data);
        console.log(`Got movie list!`);
      })
      .catch(error => console.log(`Oh noes! I failed to get your movies!`))
  }

  // =================== HANDLERS ===================
  const onSearchChange = (string) => {
    setSearch(string);
  }

  const onSearchClick = (query) => {
    event.preventDefault();
    query = query.toLowerCase()

    setMovies(
      movies.filter(movie => movie.title.toLowerCase().includes(query))
    );
  };

  const onAddMovieChange = (string) => {
    setMovieName(string);
  }

  const onAddMovieClick = (movie) => {
    event.preventDefault();

    // capitalize the first letter
    // turn the title into a movie object
    let firstChar = movie.slice(0, 1).toUpperCase();
    let otherChars = movie.slice(1).toLowerCase();

    movie = firstChar + otherChars;
    movie = {title: movie};

    axios.post('/api/movies', movie)
      .then(response => console.log(`Added '${movie.title}' to list!`))
      .catch(error => console.log(`Oh noes, I couldn't add '${movie.title}' to list!`))

      reRender();

  }

  // =================== COMPONENTS ===================
  return (
    <>
      <h1 className="title">MovieList</h1>
        <AddNewMovie
          onClick={onAddMovieClick}
          onChange={onAddMovieChange}
          movieName={movieName}

        />
        <SearchBar
          onChange={onSearchChange}
          onClick={onSearchClick}
          searchedMovies={search}
          />
        <MovieList movies={movies}/>
    </>
  );

};

export default App;
