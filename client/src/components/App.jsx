
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddNewMovie from './AddNewMovie.jsx';
import ListOps from './ListOps.jsx'

const App = () => {

  // =================== STATES ===================
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [movieName, setMovieName] = useState('');
  const [active, setActive] = useState('btn see-all');

  // =================== EFFECTS ===================
  // re-render the page whenever a movie is added or a watch button is toggled
  useEffect(() => { reRender() }, []);

  // =================== HELPERS ===================
  const reRender = (option = -1) => {
    axios.get('/api/movies')
      .then(response => {
        option < 0 ? setMovies(response.data)
          : option ? setMovies(response.data.filter(movie => movie.watched))
          : setMovies(response.data.filter(movie => !movie.watched))
        console.log(`Got movie list!`);
      })
      .catch(error => console.log(`Oh noes! I failed to get your movies!`))

  };

  const formatTitle = title => {
    title = title.split('');

    title.forEach((char, i, chars) => {
      if (i === 0) {
        chars[i] = char.toUpperCase();
      }

      if (char === ' ' || char === '.' && i < chars.length - 1) {
        chars[i + 1] = chars[i + 1].toUpperCase();
      }
    });

    return title.join('');
  }

  // =================== HANDLERS ===================
  // ===== Search Bar ===
  const onSearchChange = (string) => {
    setSearch(string);
  };

  const onSearchClick = (query) => {
    event.preventDefault();
    query = query.toLowerCase()

    setMovies(
      movies.filter(movie => movie.title.toLowerCase().includes(query))
    );

  };

  // === Add Movie Bar ===
  const onAddMovieChange = (string) => {
    setMovieName(string);
  };

  const onAddMovieClick = (movie) => {
    event.preventDefault();

    movie = { title: formatTitle(movie) };

    axios.post('/api/movies', movie)
      .then(response => console.log(`Added '${movie.title}' to list!`))
      .catch(error => console.log(`Oh noes, I couldn't add '${movie.title}' to list!`))

    reRender();

  };

  // === List Ops ===
  // see ListOps.jsx

  // === Watch Toggle ===
  const onWatchClick = (movie) => {

    axios.put('/api/movies', movie)
      .then(response => console.log(`'${movie.title}''s 'watch' status is updated!`))
      .catch(error => console.log(`Oh noes, I couldn't update '${movie.title}''s watch status!`))

    reRender();

  };

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
      <ListOps
        reRender={reRender}
        active={active}
        setActive={setActive}
      />
      <MovieList
        movies={movies}
        onClick={onWatchClick}
      />
    </>
  );

};

export default App;
