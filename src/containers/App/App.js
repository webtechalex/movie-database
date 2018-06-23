import React from 'react'
import MovieFilterFormContainer from '../MovieFilterFormContainer/MovieFilterFormContainer'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
const App = () => (
  <div className='container'>
    <h1>Movie Database</h1>
    <MovieFilterFormContainer />
    <MoviesContainer />
  </div>
)

export default App