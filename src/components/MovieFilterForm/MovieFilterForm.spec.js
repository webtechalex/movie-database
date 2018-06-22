import React from 'react'
import { shallow } from 'enzyme'
import MovieFilterForm from './MovieFilterForm'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

describe('MovieFilterForm', () => {
  const wrapper = shallow(<MovieFilterForm/>)
  it('renders a SelectDropdown', () => {
    expect(wrapper.find(SelectDropdown).length).toBe(1)
  })
  it('renders a TextInput', () => {
    expect(wrapper.find(TextInput).length).toBe(1)
  })
  it('renders a Button', () => {
    expect(wrapper.find(Button).length).toBe(1)
  })
})