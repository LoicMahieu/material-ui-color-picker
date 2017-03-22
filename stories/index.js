
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

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
