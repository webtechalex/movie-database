import React from 'react'
import { shallow } from 'enzyme'
import Movies from './Movies'
import Movie from '../Movie/Movie'
import mockMovies from '../../../mocks/movies.json'

describe('Movies', () => {
  const wrapper = shallow(<Movies movies={mockMovies}/>)
  const instance = wrapper.instance()
  it('renders a Movie for every element in movies props', () => {
    expect(wrapper.find(Movie).length).toBe(mockMovies.length)
  })
  it('holds movieIdInEdit state', () => {
    expect(wrapper.state('movieIdInEdit')).toBe('')
  })
  it('updates movieIdInEdit state when handleMovieEdit is called', () => {
    instance.handleMovieEdit('34y09u')
    expect(wrapper.state('movieIdInEdit')).toBe('34y09u')
  })
  it('resets movieIdInEdit when handleCancelEditMovie is called', () => {
    instance.handleCancelEditMovie()
    expect(wrapper.state('movieIdInEdit')).toBe('')
  })
})