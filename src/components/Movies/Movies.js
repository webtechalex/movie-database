import React, { Component, Fragment } from 'react'
import Movie from '../Movie/Movie'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieIdInEdit: ''
    }
  }

  handleMovieEdit = (movieIdInEdit) => {
    this.setState({
      movieIdInEdit
    })
  }

  handleCancelEditMovie = () => {
    this.setState({
      movieIdInEdit: ''
    })
  }

  handleSaveMovie = (title, year, genre) => {
    this.props.saveMovie(this.state.movieIdInEdit, title, year, genre)
    this.handleCancelEditMovie()
  }

  render = () => {
    return (
      <Fragment>
        {
          this.props.movies && this.props.movies.map(movie =>
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              movieYear={movie.year}
              movieGenre={movie.genre}
              movieIdInEdit={this.state.movieIdInEdit}
              handleMovieEdit={this.handleMovieEdit}
              handleCancelEditMovie={this.handleCancelEditMovie}
              handleSaveMovie={this.handleSaveMovie}
            />
          )
        }
      </Fragment>
    )
  }
}

export default Movies
