import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

class MovieFilterForm extends Component {
  constructor(props) {
    super(props)
    this.genreOptions = [
      {
        display: 'All',
        value: 'all'
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
    this.state = {
      selectedGenre: '',
      selectedYear: ''
    }
  }

  static propTypes = {
    getMovies: PropTypes.func.isRequired
  }

  handleChangeSelectedGenre = (event) => {
    this.setState({
      selectedGenre: event.target.value
    })
  }

  handleChangeSelectedYear = (event) => {
    this.setState({
      selectedYear: event.target.value
    })
  }

  handleGetMovies = () => {
    this.props.getMovies(this.state.selectedGenre, this.state.selectedYear)
  }

  render = () => {
    return (
      <Fragment>
        <SelectDropdown
          value=''
          handleChange={this.handleChangeSelectedGenre}
          options={this.genreOptions}
        />
        <TextInput
          value=''
          handleChange={this.handleChangeSelectedYear}
        />
        <Button
          text='Get Movies'
          handleClick={this.handleGetMovies}
        />
      </Fragment>
    )
  }
}

export default MovieFilterForm