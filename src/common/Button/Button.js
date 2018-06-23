import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({text, handleClick, className}) => (
  <button className={className} onClick={handleClick}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button