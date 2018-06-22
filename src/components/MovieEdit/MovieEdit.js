import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropDown'
import TextInput from '../../common/TextInput/TextInput'

class MovieEdit extends Component {
  static propTypes = {
    movieTitle: PropTypes.string.isRequired,
    movieYear: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      movieTitle: props.movieTitle,
      movieYear: props.movieYear,
      movieGenre: props.movieGenre
    }
  }

  handleChangeMovieTitle = (event) => {
    this.setState({
      movieTitle: event.target.value
    })
  }

  handleChangeMovieYear = (event) => {
    this.setState({
      movieYear: event.target.value
    })
  }

  handleChangeMovieGenre = (event) => {
    this.setState({
      movieGenre: event.target.value
    })
  }

  render = () => (
    <Fragment>
      <TextInput
        label='Title'
        value=''
        handleChange={this.handleChangeMovieTitle}
      />
      <TextInput
        label='Year'
        value=''
        handleChange={this.handleChangeMovieYear}
      />
      <SelectDropdown
        label='Genre'
        value=''
        handleChange={this.handleChangeMovieGenre}
        options={[]}
      />
    </Fragment>
  )
}

export default MovieEdit