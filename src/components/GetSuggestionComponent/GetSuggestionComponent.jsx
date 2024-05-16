import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetSuggestionComponent.css'

const GetSuggestionComponent = () => {
  const [movieGenre1, setMovieGenre1] = useState('');
  const [movieGenre2, setMovieGenre2] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieGenre1 !== '' || movieGenre2 !== '') {
      axios.get(`http://localhost:3500/api/v1/movies/admin/get?movieGenre1=${movieGenre1}&movieGenre2=${movieGenre2}`)
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }
  }, [movieGenre1, movieGenre2]);

  const handleGenre1Change = (e) => {
    setMovieGenre1(e.target.value);
  };

  const handleGenre2Change = (e) => {
    setMovieGenre2(e.target.value);
  };

  return (
    <div className='genre'>
      <label>Movie Genre 1:     </label>
      <select value={movieGenre1} onChange={handleGenre1Change} className='select'>
        <option value="">Select Movie Genre1</option>
        <option value="SciFi">SciFi</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Biography">Biography</option>
      </select>
      <br />

      <label>Movie Genre 2:     </label>
      <select value={movieGenre2} onChange={handleGenre2Change} className='select'>
        <option value="">Select Movie Genre2</option>
        <option value="">Select Movie Genre1</option>
        <option value="SciFi">SciFi</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Biography">Biography</option>

      </select>

      <div>
        <h2>Movie Details:</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.movieName} - IMDb Rating: {movie.imdbRating}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetSuggestionComponent;
