
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ColorPicker from '../src'

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <MuiThemeProvider>
      <ColorPicker value='#fff' onChange={action('changed')} />
    </MuiThemeProvider>
  ))
