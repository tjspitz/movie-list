import React from 'react';
import {useState} from 'react';

const ListOps = ({reRender, active, setActive}) => {

  const onAllMoviesClick = (event) => {
    reRender(-1);
    setActive(event.target.className);
  };

  const onWatchedMoviesClick = (event) => {
    reRender(1);
    setActive(event.target.className);
  };

  const onUnwatchedMoviesClick = (event) => {
    reRender(0);
    setActive(event.target.className);
  };

  return (
    <div>
      <button
        className="btn see-all"
        onClick={onAllMoviesClick}
        style={active === 'btn see-all' ? {background: '#59eba5'} : null}
      >
        All Movies
      </button>

      <button
        className="btn see-watched"
        onClick={onWatchedMoviesClick}
        style={active === 'btn see-watched' ? {background: '#59eba5'} : null}
      >
        Watched Movies
      </button>

        <button
          className="btn see-unwatched"
          onClick={onUnwatchedMoviesClick}
          style={active === 'btn see-unwatched' ? {background: '#59eba5'} : null}
        >
        Unwatched Movies
      </button>
    </div>
  );

};

export default ListOps;