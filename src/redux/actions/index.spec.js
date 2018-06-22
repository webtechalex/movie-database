import {
  getMovies,
  saveMovie,
  GET_MOVIES,
  SAVE_MOVIE
} from './index'

describe('getMovies action', () => {
  it('returns an object with the correct type and payload properties', () => {
    expect(getMovies('', '')).toEqual({
      type: GET_MOVIES,
      payload: {
        year: '',
        genre: ''
      }
    })
  })
})

describe('saveMovie action', () => {
  it('returns an object with the correct type and payload properties', () => {
    expect(saveMovie('945yrj', 'moviename', 'movieyear', 'moviegenre')).toEqual({
      type: SAVE_MOVIE,
      payload: {
        id: '945yrj',
        title: 'moviename',
        year: 'movieyear',
        genre: 'moviegenre'
      }
    })
  })
})