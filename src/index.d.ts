import { TextFieldProps } from "@material-ui/core/TextField";
import { converters } from "./transformers";

type props = {
  defaultValue: string;
  onChange: (color: string) => void;
  convert: keyof converters;
  hintText: string;
  floatingLabelText: string;
  showPicker: boolean;
  internalValue: string;
  setShowPicker: (open: boolean) => void;
  setValue: (value: string) => void;
} & TextFieldProps;

export type ColorPicker = (props) => JSX.Element;
