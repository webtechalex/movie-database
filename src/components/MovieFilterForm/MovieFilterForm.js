import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

class MovieFilterForm extends Component {
  static propTypes = {
    getMovies: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
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
    this.state = {
      selectedGenre: '',
      selectedYear: ''
    }
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
        <div>
          <SelectDropdown
            label='Genre'
            value={this.state.selectedGenre}
            handleChange={this.handleChangeSelectedGenre}
            options={this.genreOptions}
          />
        </div>
        <div>
          <TextInput
            label='Year'
            value={this.state.selectedYear}
            handleChange={this.handleChangeSelectedYear}
          />
        </div>
        <div>
          <Button
            text='Get Movies'
            handleClick={this.handleGetMovies}
            className='button-wide primary'
          />
        </div>
      </Fragment>
    )
  }
}

export default MovieFilterForm