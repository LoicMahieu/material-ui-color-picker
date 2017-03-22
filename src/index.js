
import React, { PropTypes } from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = ({
  value,
  onChange
}) => (
  <SketchPicker
    color={value}
    onChange={c => onChange && onChange(c.hex)}
  />
)

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default ColorPicker
