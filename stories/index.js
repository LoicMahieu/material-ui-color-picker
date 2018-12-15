
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MuiThemeProvider } from '@material-ui/core/styles'

import ColorPicker from '../src'

class Controlled extends React.Component {
  state = { value: '#fff' };
  onChange = (value) => {
    this.setState({ value });
    action('changed')(value);
  }
  render () {
    return (
      <MuiThemeProvider>
        <ColorPicker
          value={this.state.value}
          onChange={this.onChange}
          floatingLabelText='Color picker'
        />
        <button onClick={() => this.onChange('#00ff00')}>set #00ff00</button>
      </MuiThemeProvider>
    )
  }
}

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
  .add('controlled', () => (
    <Controlled />
  ))
