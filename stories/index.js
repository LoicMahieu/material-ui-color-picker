import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from '@material-ui/styles'

import ColorPicker from '../src/index'
import ColorPicker2 from '../src/index2'

class Controlled extends React.Component {
  state = { value: '#fff' }

  handleChange = (value) => {
    this.setState({ value })
    action('changed')(value)
  }

  render () {
    return (
      <ThemeProvider theme={{}}>
        <ColorPicker
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText='Color picker'
          variant='outlined'
        />
        <button onClick={() => this.handleChange('#00ff00')}>set #00ff00</button>
      </ThemeProvider>
    )
  }
}

class Controlled2 extends React.Component {
  state = { value: '#fff' }

  handleChange = (value) => {
    this.setState({ value })
    action('changed')(value)
  }

  render () {
    return (
      <ThemeProvider theme={{}}>
        <ColorPicker2
          value={this.state.value}
          onChange={this.handleChange}
          name='Test'
          // floatingLabelText='Color picker'
          // variant='outlined'
        />
      </ThemeProvider>
    )
  }
}

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <ThemeProvider theme={{}}>
      <ColorPicker
        defaultValue='#000000'
        onChange={action('changed')}
        floatingLabelText='Color picker'
      />
    </ThemeProvider>
  ))
  .add('controlled', () => (
    <Controlled />
  ))

storiesOf('ColorPicker2', module)
  .add('simple', () => (
    <ThemeProvider theme={{}}>
      <ColorPicker2
        // defaultValue='#000000'
        onChange={action('changed')}
        name='Test'
        // floatingLabelText='Color picker'
      />
    </ThemeProvider>
  ))
  .add('controlled', () => (
    <Controlled2 />
  ))
