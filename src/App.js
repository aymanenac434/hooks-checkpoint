import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const addMovie = (newMovie) => {
  setMovies([...movies, newMovie]);
};

<NewMovieForm addMovie={addMovie} />

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 8.8,
    },
  
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating >= filter.rating)
  );

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

