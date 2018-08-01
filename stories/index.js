
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MuiThemeProvider } from '@material-ui/core/styles'

import ColorPicker from '../src'

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <MuiThemeProvider>
      <ColorPicker
        defaultValue='#000'
        onChange={action('changed')}
        floatingLabelText='Color picker'
      />
    </MuiThemeProvider>
  ))
