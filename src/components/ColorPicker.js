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
  disabled,

  // Text field
  name,
  id,
  hintText,
  placeholder,
  floatingLabelText,
  label,
  TextFieldProps,
  TextFieldComponent = TextField,
  value,

  // State
  showPicker,
  setShowPicker,
  internalValue,
  setValue

}) => (
  <Fragment>
    <TextFieldComponent
      name={name}
      id={id}
      value={value === undefined ? internalValue : value}
      label={floatingLabelText || label}
      placeholder={hintText || placeholder}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        if(onChange) {
          onChange(e.target.value)
        }
      }}
      disabled={disabled}
      {...TextFieldProps}
    />
    {showPicker && !disabled && (
      <PickerDialog
        value={value === undefined ? internalValue : value}
        onClick={() => {
          setShowPicker(false);
          if(onChange) {
            onChange(value);
          }
        }}
        onChange={c => {
          const newValue = converters[convert](c);
          setValue(newValue);
          if(onChange) {
            onChange(newValue);
          }
        }}
      />
    )}
  </Fragment>
)

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  convert: PropTypes.oneOf(Object.keys(converters)),
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  hintText: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  floatingLabelText: PropTypes.string,
  TextFieldProps: PropTypes.shape(TextField.propTypes),
  TextFieldComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.object]),
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  internalValue: PropTypes.string,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
}

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER,
  disabled: false,
}

const makeColorPicker = compose(
  withState('showPicker', 'setShowPicker', false),
  withState('internalValue', 'setValue', ({ defaultValue }) => defaultValue)
)

const MakedColorPicker = makeColorPicker(ColorPicker)

const ColorPickerField = ({ input: { value, onChange, ...restInput }, meta: { touched, error }, ...restProps }) => (
  <MakedColorPicker
    value={value}
    onChange={onChange}
    errorText={touched && error}
    {...restInput}
    {...restProps}
  />
)

ColorPickerField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
}

export default MakedColorPicker

export {
  ColorPickerField
}
