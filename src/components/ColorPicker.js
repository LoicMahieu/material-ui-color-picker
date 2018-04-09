
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
  value,

  // State
  showPicker,
  setShowPicker,
  internalValue,
  setValue,

  // pass other props to Text field
  ...restProps
}) => (
  <div>
    <TextField
      value={value || internalValue}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
        }
      }
      InputProps={{style: {color: value}}}
      {...restProps}
    />
    {showPicker && (
      <PickerDialog
        value={value || internalValue}
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
  withState('internalValue', 'setValue', ({ defaultValue }) => defaultValue)
)

const MakedColorPicker = makeColorPicker(ColorPicker);

const ColorPickerField = ({ input: { value, onChange }, ...restProps }) => (
  <MakedColorPicker
    value={value}
    onChange={onChange}
    {...restProps}
  />
);

export default MakedColorPicker;

export {
  ColorPickerField,
};
