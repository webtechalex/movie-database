import movies from './index'
import { getMovies, saveMovie } from '../actions';
import mockMovies from '../../../mocks/movies.json'

describe('movies', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      expect(movies()).toEqual([])
    })
  })
  describe('given a getMovies action', () => {
    it('returns a list of movies', () => {
      expect(movies([], getMovies('', ''))).toEqual(mockMovies)
    })
  })
  describe('given a saveMovie action', () => {
    it('edits the movie with the given ID using the given parameters', () => {
      expect(movies(mockMovies, saveMovie('34y09u', 'Kill Bill', '2003', 'Action'))[0]).toEqual({
        id: '34y09u',
        title: 'Kill Bill',
        year: '2003',
        genre: 'Action'
      })
    })
  })
})