import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

class MovieEdit extends Component {
  static propTypes = {
    movieTitle: PropTypes.string.isRequired,
    movieYear: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    handleCancelEditMovie: PropTypes.func.isRequired,
    handleSaveMovie: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      movieTitle: props.movieTitle,
      movieYear: props.movieYear,
      movieGenre: props.movieGenre
    }
    this.genreOptions = [
      {
        display: 'All',
        value: ''
      },
      {
        display: 'Action',
        value: 'action'
      },
      {
        display: 'Comedy',
        value: 'comedy'
      },
      {
        display: 'Drama',
        value: 'drama'
      },
      {
        display: 'Kids',
        value: 'kids'
      },
      {
        display: 'Sci-Fi',
        value: 'sci-fi'
      }
    ]
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
        value={this.state.movieTitle}
        handleChange={this.handleChangeMovieTitle}
      />
      <TextInput
        label='Year'
        value={this.state.movieYear}
        handleChange={this.handleChangeMovieYear}
      />
      <SelectDropdown
        label='Genre'
        value={this.state.movieGenre}
        handleChange={this.handleChangeMovieGenre}
        options={this.genreOptions}
      />
      <Button
        text='Cancel'
        handleClick={this.props.handleCancelEditMovie}
      />
      <Button
        text='Save'
        handleClick={() => this.props.handleSaveMovie(this.state.movieTitle, this.state.movieYear, this.state.movieGenre)}
      />
    </Fragment>
  )
}

export default MovieEdit