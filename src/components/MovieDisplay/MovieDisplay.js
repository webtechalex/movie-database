import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const MovieDisplay = ({title, year, genre}) => (
  <Fragment>
    <h3>{title}</h3>
    <p>{year}</p>
    <p>{genre}</p>
  </Fragment>
)

MovieDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
}

export default MovieDisplay