# `<ColorPicker>` for material-ui

![`<ColorPicker>` example](./doc/screenshot.png)

ColorPicker based on [`<TextField />`](http://www.material-ui.com/#/components/text-field) and `<ChromePicker />` from [`react-color`](https://github.com/casesandberg/react-color/).

## Demo

[https://material-ui-color-picker.now.sh/](https://material-ui-color-picker.now.sh/)

## Installation

```sh
npm install --save material-ui-color-picker
```

## Usage

```js
import React from 'react'
import ColorPicker from 'material-ui-color-picker'

<ColorPicker
  name='color'
  defaultValue='#000'
  // value={this.state.color} - for controlled component
  onChange={color => console.log(color)}

/>
```

There is not so much properties at this time. The was very quickly designed for my needs. Feel free to submit a PR with new features ;)

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
