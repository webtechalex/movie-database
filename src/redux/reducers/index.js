import { GET_MOVIES } from '../actions'
import mockMovies from '../../../mocks/movies.json'

const movies = (state = [], action) => {
  switch (action && action.type) {
    case GET_MOVIES:
      return mockMovies
    default:
      return state
  }
}

export default movies