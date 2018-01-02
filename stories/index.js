
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toolbar from 'material-ui/Toolbar'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

import ColorPicker from '../src'

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <MuiThemeProvider>
    <Toolbar style={{ background: 'none' }}>
      <ColorPicker
        defaultValue='#000'
        onChange={action('changed')}
        floatingLabelText='Color Picker'
      />
      <ColorPicker
        defaultValue='#000'
        onChange={action('changed')}
        disableAlpha={ true }
        floatingLabelText='No Alpha'
      />
      <ColorPicker
        defaultValue='#000'
        onChange={action('changed')}
        disableAlpha={ true }
        pickerType='Circle'
        floatingLabelText='Circle Picker'
      />
    </Toolbar>
    </MuiThemeProvider>
  ))
