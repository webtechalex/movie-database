import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import MovieEdit from '../MovieEdit/MovieEdit'
import Button from '../../common/Button/Button'
import './Movie.css'

const Movie = ({ movieId, movieTitle, movieYear, movieGenre, movieIdInEdit, handleMovieEdit, handleCancelEditMovie, handleSaveMovie }) => (
  <li className='movie-info'>{movieIdInEdit === movieId ?
    <MovieEdit
      movieTitle={movieTitle}
      movieYear={movieYear}
      movieGenre={movieGenre}
      handleCancelEditMovie={handleCancelEditMovie}
      handleSaveMovie={handleSaveMovie}
    /> :
    <Fragment>
      <MovieDisplay
        title={movieTitle}
        year={movieYear}
        genre={movieGenre}
      />
      <Button
        text='Edit'
        handleClick={() => handleMovieEdit(movieId)}
        className='button-wide'
      />
    </Fragment>}
  </li>

)

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieIdInEdit: PropTypes.string.isRequired,
  handleMovieEdit: PropTypes.func.isRequired,
  handleCancelEditMovie: PropTypes.func.isRequired,
  handleSaveMovie: PropTypes.func.isRequired
}

export default Movie
