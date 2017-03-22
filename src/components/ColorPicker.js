
import React, { PropTypes } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import TextField from 'material-ui/TextField'

import { DEFAULT_CONVERTER, converters } from '../transformers'
import PickerDialog from './PickerDialog'

const ColorPicker = ({
  // ColorPicker
  defaultValue,
  onChange,
  convert,

  // Text field
  name,
  id,
  hintText,
  floatingLabelText,

  // State
  showPicker,
  setShowPicker,
  value,
  setValue
}) => (
  <div>
    <TextField
      name={name}
      id={id}
      hintText={hintText}
      value={value}
      floatingLabelText={floatingLabelText}
      inputStyle={{ color: value }}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
    />
    {showPicker && (
      <PickerDialog
        value={value}
        onClick={() => {
          setShowPicker(false)
          onChange(value)
        }}
        onChange={c => {
          const newValue = converters[convert](c)
          setValue(newValue)
          onChange(newValue)
        }}
      />
    )}
  </div>
)

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  convert: PropTypes.oneOf(Object.keys(converters))
}

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER
}

const makeColorPicker = compose(
  withState('showPicker', 'setShowPicker', false),
  withState('value', 'setValue', ({ defaultValue }) => defaultValue)
)

export default makeColorPicker(ColorPicker)
