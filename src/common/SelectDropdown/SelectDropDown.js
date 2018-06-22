import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const SelectDropdown = ({value, options, handleChange, label}) => (
  <Fragment>
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
          <option key={index}>{option.display}</option>
        ))
      }
    </select>
  </Fragment>
);

SelectDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default SelectDropdown