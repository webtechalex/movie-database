import React from 'react'
import { shallow, mount } from 'enzyme'
import MovieFilterForm from './MovieFilterForm'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

describe('MovieFilterForm', () => {
  const wrapper = shallow(
    <MovieFilterForm
      getMovies={jest.fn()}
    />
  )
  const instance = wrapper.instance()
  it('renders a SelectDropdown', () => {
    expect(wrapper.find(SelectDropdown).length).toBe(1)
  })
  it('renders a TextInput', () => {
    expect(wrapper.find(TextInput).length).toBe(1)
  })
  it('renders a Button', () => {
    expect(wrapper.find(Button).length).toBe(1)
  })
  it('has a class property: genreOptions', () => {
    const genreOptions = [
      {
        display: 'All',
        value: 'all'
      },
      {
        display: 'Action',
        value: 'action'
      },
      {
        display: 'Comedy',
        value: 'comedy'
      },
      {
        display: 'Drama',
        value: 'drama'
      },
      {
        display: 'Kids',
        value: 'kids'
      },
      {
        display: 'Sci-Fi',
        value: 'sci-fi'
      }
    ]
    expect(instance).toHaveProperty('genreOptions', genreOptions)
  })
  it('has a state property for selectedGenre', () => {
    expect(wrapper.state()).toHaveProperty('selectedGenre', '')
  })
  it('updates selectedGenre when handleChangeSelectedGenre is called', () => {
    instance.handleChangeSelectedGenre({ target: { value: 'action' } })
    expect(wrapper.state('selectedGenre')).toBe('action')
  })
  it('has a state property for selectedYear', () => {
    expect(wrapper.state()).toHaveProperty('selectedYear', '') 
  })
  it('updates selectedYear when handleChangeSelectedYear is called', () => {
    instance.handleChangeSelectedYear({ target: { value: '1999' } })
    expect(wrapper.state('selectedYear')).toBe('1999')
  })
})