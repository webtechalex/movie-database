import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import MovieEdit from '../MovieEdit/MovieEdit'
import Button from '../../common/Button/Button'

const Movie = ({movieId, movieTitle, movieYear, movieGenre, movieIdInEdit, handleMovieEdit}) => (
  movieIdInEdit === movieId ?
    <MovieEdit
      movieTitle={movieTitle}
      movieYear={movieYear}
      movieGenre={movieGenre}
    /> :
    <Fragment>
      <MovieDisplay
        title={movieTitle}
        year={movieYear}
        genre={movieGenre}
      />
      <Button
        text='Edit'
        handleClick={handleMovieEdit}
      />
    </Fragment>
)

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieIdInEdit: PropTypes.string.isRequired,
  handleMovieEdit: PropTypes.func.isRequired
}

export default Movie
