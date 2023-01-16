import React from 'react';

const SearchBar = ({onChange, onClick, searchedMovies}) => {

  const handleChange = event => onChange(event.target.value);
  const handleSubmit = event => {
    onClick(searchedMovies);
    console.log(event.target)
  };

  return (
    <div className="search-bar">
      <input className="search-bar input-field"
        type="text"
        placeholder="Find a movie..."
        onChange={handleChange}
      />
      <button className="btn search-bar"
        onClick={handleSubmit}
      >
        Find!
      </button>
    </div>
  );

};

export default SearchBar;