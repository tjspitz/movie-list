import React from 'react';

const AddNewMovie = ({onClick, onChange, movieName}) => {

  const handleChange = event => onChange(event.target.value);
  const handleSubmit = event => onClick(movieName);

  return (
    <div className="add-movie">
      <input className="add-movie input-field"
        type="text"
        placeholder="Add a new movie..."
        onChange={handleChange}
      />
      <button className="btn add-movie"
        onClick={handleSubmit}
      >
        Add movie!
      </button>
    </div>
  );

};

export default AddNewMovie;