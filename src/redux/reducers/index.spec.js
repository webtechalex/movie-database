import movies from './index'
import { getMovies } from '../actions';
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
})