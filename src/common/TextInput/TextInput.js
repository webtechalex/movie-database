import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({value, handleChange, label}) => (
  <div className='text-input flex-container'>
    {
      label &&
      <label>{label}</label>
    }
    <input
      type='text'
      value={value}
      onChange={handleChange}
    />
  </div>
)

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TextInput