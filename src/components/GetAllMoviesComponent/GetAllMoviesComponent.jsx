import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetAllMoviesComponent.css'
import MoviesComponent from './MoviesComponent'

const GetAllMoviesComponent = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3500/api/v1/movies')
    .then(response => {
      setMovies(response.data)
    })
    .catch(error => console.log(error))
  }, [movies])

  return (
    <div className ='movies'>
      {movies.map((movie, index) => (
        <MoviesComponent movie = {movie} key = {index}/>
        ))}
    </div>
  )
}

export default GetAllMoviesComponent