# `<ColorPicker>` for material-ui

![`<ColorPicker>` example](./doc/screenshot.png)

ColorPicker based on [`<TextField />`](http://www.material-ui.com/#/components/text-field) and `<ChromePicker />` from [`react-color`](https://github.com/casesandberg/react-color/) and its [redux-form](https://redux-form.com) field component.

## Installation

```sh
npm install --save material-ui-color-picker
```

```sh
yarn add material-ui-color-picker
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
[Redux-form](https://redux-form.com) field
```js
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { ColorPickerField } from 'material-ui-color-picker';

...
<Field
  name="color"
  component={ColorPickerField}
/>
...

```


## Properties

| Parameter | Description | Default |
|---|---|---|
|**`defaultValue`**|A default color value| `false` `optional`|
|**`disableAlpha`**|Disables alpha channel on color picker|`false` `optional`|
|**`disableColorLabel`**|Disables the coloring of the label on the text field|`false` `optional`|
|**`value`**|The controlled `value` property|`false` `optional`|
|**`variant`**|The material-ui textfield variant.|`default` `optional`|
|**`pickerVariant`**|The type of picker variant (see react-color for variations).|`false` `optional`|
|**`TextFieldProps`**|Additional properties that passed to the textfield component.|`false` `optional`|
|**`PickerProps`**|Additional properties that passed to the picker component.|`false` `optional`|
|**`convert`**|A converter which ensures a proper color output. Valid values are: `rgba_hex` `rgba_rgb` `rgb` `rgba` `hex`|`rgba_hex` `optional`|


## Events

| Event | Description | Default |
|---|---|---|
|**`onChange`**|Triggers when the color has changed|`false` `optional`|


## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
