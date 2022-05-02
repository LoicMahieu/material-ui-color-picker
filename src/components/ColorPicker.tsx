/* External modules */
import React, { FC, useState, useCallback, ChangeEvent, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { TextFieldProps } from "@mui/material";

/* Local */
import { DEFAULT_CONVERTER, converters } from "../utils/transformers";
import PickerDialog from "./PickerDialog";
import { ConverterType } from "../index";
import { ColorResult } from "react-color";

export interface ColorPickerProps {
  convert?: ConverterType;
  name?: string;
  id?: string;
  defaultValue?: string;
  value?: string;
  hintText?: string;
  placeholder?: string;
  label?: string;
  floatingLabelText?: string;
  onChange: (color: string) => void;
}

const ColorPicker: FC<Omit<TextFieldProps, "onChange"> & ColorPickerProps> = ({
  // ColorPicker
  onChange,
  convert = DEFAULT_CONVERTER,

  // Text field
  name,
  id,
  hintText,
  placeholder,
  floatingLabelText,
  label,
  value,
  defaultValue = "#000",

  ...otherFields
}) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const defaultColor = useMemo(() => value ?? defaultValue, [value, defaultValue]);
  const [color, setColor] = useState<string>(defaultColor);

  const handleShowPicker = useCallback(() => setShowPicker(true), [setShowPicker]);
  const handleHidePicker = useCallback(() => setShowPicker(false), [setShowPicker]);

  useEffect(() => {
    setColor(defaultColor);
  }, [value, setColor, defaultColor]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
      onChange(event.target.value);
    },
    [setColor, onChange],
  );

  const handlePickerClick = useCallback(() => {
    handleHidePicker();
    onChange(color);
  }, [handleHidePicker, onChange]);

  const handlePickerChange = useCallback(
    (c: ColorResult) => {
      const newColor = converters[convert](c);
      setColor(newColor);
      onChange(newColor);
    },
    [setColor, onChange],
  );

  return (
    <>
      <TextField
        name={name}
        id={id}
        label={floatingLabelText || label}
        value={color}
        placeholder={hintText || placeholder}
        onClick={handleShowPicker}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  background: color,
                  border: "solid 1px",
                  borderColor: (theme) => theme.palette.divider,
                  width: 25,
                  height: 25,
                }}
              />
            </InputAdornment>
          ),
        }}
        {...otherFields}
      />

      {showPicker && (
        <PickerDialog value={color} onClick={handlePickerClick} onChange={handlePickerChange} />
      )}
    </>
  );
};

export default ColorPicker;
