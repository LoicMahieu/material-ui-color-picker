import React from 'react'
import PropTypes from 'prop-types'
let reactColor = require('react-color')

const PickerDialog = ({
  value,
  onClick,
  onChange,
  variant,
  disableAlpha,
  PickerProps
}) => {
  let PickerType = reactColor[(variant || 'Chrome') + 'Picker']
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
        {...PickerProps}
      />
    </div>
  )
}

PickerDialog.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disableAlpha: PropTypes.bool,
  variant: PropTypes.string,
  PickerProps: PropTypes.object,
}

export default PickerDialog