import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('renders a button element', () => {
    const wrapper = shallow(
      <Button
        text='A'
        handleClick={jest.fn()}
      />
    )
    expect(wrapper.find('button').length).toBe(1)
  })
})