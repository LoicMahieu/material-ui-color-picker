import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import TextField from '@material-ui/core/TextField'

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
  placeholder,
  floatingLabelText,
  label,
  TextFieldProps,
  value,

  // State
  showPicker,
  setShowPicker,
  internalValue,
  setValue

}) => (
  <Fragment>
    <TextField
      name={name}
      id={id}
      value={value === undefined ? internalValue : value}
      label={floatingLabelText || label}
      placeholder={hintText || placeholder}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      InputProps={{ style: { color: value === undefined ? internalValue : value } }}
      {...TextFieldProps}
    />
    {showPicker && (
      <PickerDialog
        value={value === undefined ? internalValue : value}
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
  </Fragment>
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
  withState('internalValue', 'setValue', ({ defaultValue }) => defaultValue)
)

const MakedColorPicker = makeColorPicker(ColorPicker);

const ColorPickerField = ({ input: { value, onChange, ...restInput }, meta: { touched, error }, ...restProps }) => (
  <MakedColorPicker
    value={value}
    onChange={onChange}
    errorText={touched && error}
    {...restInput}
    {...restProps}
  />
)

export default MakedColorPicker

export {
  ColorPickerField
}
