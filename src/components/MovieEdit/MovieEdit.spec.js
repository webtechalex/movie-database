import React from 'react'
import { shallow } from 'enzyme'
import MovieEdit from './MovieEdit'
import SelectDropdown from '../../common/SelectDropdown/SelectDropDown'
import TextInput from '../../common/TextInput/TextInput'

describe('MovieEdit', () => {
  const wrapper = shallow(
    <MovieEdit />
  )
  it('renders a SelectDropdown', () => {
    expect(wrapper.find(SelectDropdown).length).toBe(1)
  })
  it('renders two TextInputs', () => {
    expect(wrapper.find(TextInput).length).toBe(2)
  })
})