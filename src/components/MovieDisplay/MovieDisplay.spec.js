import React from 'react'
import { shallow } from 'enzyme'
import MovieDisplay from './MovieDisplay'

describe('MovieDisplay', () => {
  const wrapper = shallow(
    <MovieDisplay
      title=''
      year=''
      genre=''
    />
  )
  it('renders an h3 element', () => {
    expect(wrapper.find('h3').length).toBe(1)
  })

  it('renders two p elements', () => {
    expect(wrapper.find('p').length).toBe(2)
  })
})
