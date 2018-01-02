
import React, { PropTypes } from 'react'
// import reactColor from 'react-color'
let reactColor = require('react-color')

const PickerDialog = ({
  value,
  onClick,
  onChange,
  pickerType,
  disableAlpha
}) => {
  let PickerType = reactColor[(pickerType || 'Chrome') + 'Picker']
  window.console.log((pickerType || 'Chrome') + 'Picker', reactColor, PickerType)
  return (
    <div style={{ position: 'fixed', zIndex: '2' }}>
      <div
        style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
        onClick={onClick}
      />
      <PickerType
        color={value}
        disableAlpha={ disableAlpha || false}
        onChange={onChange}
      />
    </div>
  )
}

PickerDialog.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disableAlpha: PropTypes.bool
}

export default PickerDialog
