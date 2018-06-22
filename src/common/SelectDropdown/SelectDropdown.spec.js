import React from 'react'
import { shallow } from 'enzyme'
import SelectDropdown from './SelectDropDown'

describe('SelectDropdown component', () => {
  const selectOptions = [
    {
      display: 'All',
      value: ''
    },
    {
      display: 'A',
      value: 'a'
    },
    {
      display: 'B',
      value: 'b'
    },
    {
      display: 'C',
      value: 'c',
    }
  ]
  const wrapper = shallow(
    <SelectDropdown
      value='A'
      options={selectOptions}
      handleChange={jest.fn()}
    />
  )
  it('returns a select element', () => {
    expect(wrapper.find('select').length).toBe(1)
  })
  it('returns a number of option elements equal to the length of the options prop', () => {
    expect(wrapper.find('option').length).toBe(selectOptions.length)
  })
})