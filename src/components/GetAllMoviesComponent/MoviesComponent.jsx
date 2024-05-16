import React from 'react'

const MoviesComponent = ({movie}) => {
  return (
    <div className='card'>
      <div className='text-container'>
        <h3>{movie.movieName}</h3>
        <p className='status'>
          {movie.movieGenre1}
        </p>
        <p className="status">
          {movie.movieGenre2}
        </p>
        <p className="release">Released in</p>
        <p className="year">{movie.movieYear}</p>
        <p className="rating">{movie.imdbRating}</p>
      </div>
    </div>
  )
}

export default MoviesComponent
