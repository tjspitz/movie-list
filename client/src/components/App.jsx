import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddNewMovie from './AddNewMovie.jsx';
import {useState} from 'react';

const App = () => {

  const [movies, setMovies] = useState(
      [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    );

  const [search, setSearch] = useState('');
  const [movieName, setMovieName] = useState('');
  const [newMovieName, setNewMovieName] = useState('');

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

  const onAddClick = (movie) => {
    console.log('arg: ', movie);
    // setNewMovieName({title.movie});
  }

  return (
    <>
      <h1 className="title">MovieList</h1>
        <AddNewMovie
          onClick={onAddClick}
          onChange={onAddMovieChange}

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

// const [searchedMovies, setSearchedMovies] = useState([]);

// const SearchBar = ({onChange, onClick, searchedMovies}) => {

//   const handleChange = event => onChange(event.target.value);
//   const handleSubmit = event => onClick(searchedMovies);

//   return (
//     <div className="search-bar">
//       <input className="search-bar input-field"
//         type="text"
//         placeholder="Find a movie..."
//         onChange={handleChange}
//       />
//       <button className="btn search-bar"
//         onClick={handleSubmit}
//       >
//         Find!
//       </button>
//     </div>
//   );

// };

// const MovieList = ({movies}) => {
//   // in react, && is like.... "then do this"...?
//     // and if that condition fails, there is no ||, we just proceed to the mapping...

//   // but if we don't want to mess with that, we stick the ternary...
//     // return `right here ?` (...) `: and here`

//   return (
//     <div className="movie-list">
//       {!movies.length &&
//       <div>Sorry, I couldn't find any movies that match your search...</div>}
//       {movies.map(movie =><MovieListEntry movie={movie}/>)}
//     </div>
//   )

// };

// const MovieListEntry = ({movie}) => {
//   return (
//     <div className="movie-title">{movie.title}</div>
//   );

// };
