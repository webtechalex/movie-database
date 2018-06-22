import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import movies from '../../redux/reducers'
import MovieFilterFormContainer from '../../containers/MovieFilterFormContainer/MovieFilterFormContainer'
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer'

const App = () => (
  <Provider store={createStore(movies)}>
    <Fragment>
      <MovieFilterFormContainer />
      <MoviesContainer />
    </Fragment>
  </Provider>
)

export default App