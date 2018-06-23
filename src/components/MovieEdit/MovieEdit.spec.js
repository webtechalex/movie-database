import React from 'react'
import { shallow } from 'enzyme'
import MovieEdit from './MovieEdit'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

describe('MovieEdit', () => {
  const wrapper = shallow(
    <MovieEdit
      movieTitle='A'
      movieYear='1984'
      movieGenre='action'
      handleCancelEditMovie={jest.fn()}
      handleSaveMovie={jest.fn()}
    />
  )
  const instance = wrapper.instance()
  it('renders a SelectDropdown', () => {
    expect(wrapper.find(SelectDropdown).length).toBe(1)
  })
  it('renders two TextInputs', () => {
    expect(wrapper.find(TextInput).length).toBe(2)
  })
  it('holds state for movieTitle taken from props', () => {
    expect(wrapper.state('movieTitle')).toBe('A')
  })
  it('updates state for movieTitle when handleChangeMovieTitle is called', () => {
    instance.handleChangeMovieTitle({ target: { value: 'B' } })
    expect(wrapper.state('movieTitle')).toBe('B')
  })
  it('holds state for movieYear', () => {
    expect(wrapper.state('movieYear')).toBe('1984')
  })
  it('updates state for movieTitle when handleChangeMovieYear is called', () => {
    instance.handleChangeMovieYear({ target: { value: '1991' } })
    expect(wrapper.state('movieYear')).toBe('1991')
  })
  it('holds state for movieGenre', () => {
    expect(wrapper.state('movieGenre')).toBe('action')
  })
  it('updates state for movieGenre when handleChangeMovieGenre is called', () => {
    instance.handleChangeMovieGenre({ target: { value: 'comedy' } })
    expect(wrapper.state('movieGenre')).toBe('comedy')
  })
  it('renders two Button components', () => {
    expect(wrapper.find(Button).length).toBe(2)
  })
})