import axios from 'axios';
import React, { useState } from 'react'
import './AddNewMoviesComponent.css'

const AddNewMoviesComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieName: '',
    movieYear: '',
    movieGenre1: '',
    movieGenre2: '',
    imdbRating: '',
  });

  const movieNameHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieName: event.target.value,
    });
  };

  const movieYearHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieYear: event.target.value,
    });
  };

  const movieGenre1Handler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieGenre1: event.target.value,
    });
  };

  const movieGenre2Handler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieGenre2: event.target.value,
    });
  };

  const imdbRatingHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      imdbRating: event.target.value,
    });
  }

  const {movieName, movieYear, movieGenre1, movieGenre2, imdbRating} = movieInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault()
    
    axios
      .post(`http://localhost:3500/api/v1/movies/admin/add`, movieInfo)
      .then(response => {
        alert(`${response.data.movieName} is added successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new movie</h2>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          placeholder='Enter the movie name'
          value={movieName}
          onChange={movieNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Year</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the movie year'
          value={movieYear}
          onChange={movieYearHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Genre1</label>
        <input
          type='text'
          placeholder='Enter the movie genre1'
          value={movieGenre1}
          onChange={movieGenre1Handler}
          required
        />
      </div>
      <div className='form-group'>
        <label>Movie Genre2</label>
        <input
          type='text'
          placeholder='Enter the movie genre2'
          value={movieGenre2}
          onChange={movieGenre2Handler}
          required
        />
      </div>

      <div className='form-group'>
        <label>imdb Rating</label>
        <input
          type='text'
          placeholder='Enter the ratings'
          value={imdbRating}
          onChange={imdbRatingHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};


export default AddNewMoviesComponent