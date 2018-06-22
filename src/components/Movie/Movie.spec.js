import React from 'react'
import { shallow } from 'enzyme'
import Movie from './Movie'
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import MovieEdit from '../MovieEdit/MovieEdit'
import Button from '../../common/Button/Button'

describe('Movie', () => {
  const noEditProps = {
    movieId: '29dyj2',
    movieTitle: 'A',
    movieYear: '2002',
    movieGenre: 'kids',
    movieIdInEdit: '5idh3l',
    handleMovieEdit: jest.fn()
  }
  const editProps = {
    ...noEditProps,
    movieIdInEdit: '29dyj2'
  }
  const wrapper = shallow(
    <Movie
      {...noEditProps}
    />
  )
  it('renders a MovieDisplay if the movieIdInEdit prop is not equal to the movieId prop', () => {
    expect(wrapper.find(MovieDisplay).length).toBe(1)
  })
  it('renders a Button if the movieIdInEdit prop is not equal to the movieId prop', () => {
    expect(wrapper.find(Button).length).toBe(1)
  })
  it('renders a MovieEdit if the movieIdInEdit prop is equal to the movieId prop', () => {
    const wrapper = shallow(
      <Movie
        {...editProps}
      />
    )
    expect(wrapper.find(MovieEdit).length).toBe(1)
  })
})