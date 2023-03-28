import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler(){
    // can optionally pass in and object to fetch {} that adds more specific configures for the request
    fetch('https://swapi.dev/api/films')
    .then((response) => {
      return response.json(); // returns a promise
    })
    .then((data) => { // this grabs the response.json promise
      const transformedMovies = data.results.map((movieData) => {
        return{
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date
        }
      });
      setMovies(transformedMovies);
    })
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
