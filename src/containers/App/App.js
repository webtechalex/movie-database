import React from 'react'
import MovieFilterFormContainer from '../MovieFilterFormContainer/MovieFilterFormContainer'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
const App = () => (
  <div className='container'>
    <MovieFilterFormContainer />
    <MoviesContainer />
  </div>
)

export default App