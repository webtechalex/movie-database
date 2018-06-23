import React from 'react'
import PropTypes from 'prop-types'
import './SelectDropdown.css'

const SelectDropdown = ({value, options, handleChange, label}) => (
  <div className='select-input'>
    {
      label &&
      <label>{label}</label>
    }
    <select
      value={value}
      onChange={handleChange}
    >
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>{option.display}</option>
        ))
      }
    </select>
  </div>
);

SelectDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default SelectDropdown