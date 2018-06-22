import React from 'react'
import { shallow } from 'enzyme'
import TextInput from './TextInput'

describe('TextInput', () => {
  it('renders an input element', () => {
    const wrapper = shallow(
      <TextInput
        value=''
        handleChange={jest.fn()}
      />
    )
    expect(wrapper.find('input').length).toBe(1)
  })
})