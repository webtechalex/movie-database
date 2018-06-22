import { GET_MOVIES, SAVE_MOVIE } from '../actions'
import mockMovies from '../../../mocks/movies.json'

const movies = (state = [], action) => {
  switch (action && action.type) {
    case GET_MOVIES:
      return mockMovies
    case SAVE_MOVIE:
      const { id, title, year, genre } = action.payload
      return state.map(movie => movie.id === id ? (
        {
          id,
          title,
          year,
          genre
        }
      ) : movie)
    default:
      return state
  }
}

export default movies