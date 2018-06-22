import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropdown'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

class MovieFilterForm extends Component {
  render() {
    return (
      <Fragment>
        <SelectDropdown
          value=''
          handleChange={() => {}}
          options={[]}
        />
      <TextInput
        value=''
        handleChange={() => {}}
      />
      <Button
        text='Get Movies'
        handleClick={() => {}}
      />
      </Fragment>
    )
  }
}

export default MovieFilterForm