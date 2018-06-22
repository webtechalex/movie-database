import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../common/SelectDropdown/SelectDropDown'
import TextInput from '../../common/TextInput/TextInput'

class MovieEdit extends Component {
  render = () => (
    <Fragment>
      <TextInput
        value=''
        handleChange={() => {}}
      />
      <SelectDropdown 
        value=''
        handleChange={() => {}}
        options={[]}
      />
      <TextInput
        value=''
        handleChange={() => {}}
      />
    </Fragment>
  )
}

export default MovieEdit