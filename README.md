# `<ColorPicker>` for material-ui

![`<ColorPicker>` example](./doc/screenshot.png)

ColorPicker based on [`<TextField />`](http://www.material-ui.com/#/components/text-field) and `<ChromePicker />` from [`react-color`](https://github.com/casesandberg/react-color/).

## Installation

For material-ui next (v1):

```sh
npm install material-ui-color-picker@next --save
```

(see [`next`](/tree/next) branch for development)

For material-ui stable (v0.x):

```sh
npm install material-ui-color-picker --save
```

## Usage

```js
import React from 'react'
import ColorPicker from 'material-ui-color-picker'

<ColorPicker
  name='color'
  defaultValue='#000'
  disableAlpha={ false }
  pickerType='Circle'
  onChange={color => console.log(color)}
/>
```

`pickerType` can be any React Color supported class. `CirclePicker` becomes `Circle`. 

There is not so much properties at this time. The was very quickly designed for my needs. Feel free to submit a PR with new features ;)

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
