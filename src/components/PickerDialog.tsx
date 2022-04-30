import React, { FC, MouseEvent } from "react";
import { ChromePicker, ColorResult } from "react-color";

/* MUI Components */
import Box from "@mui/material/Box";

interface PickerDialogProps {
  value?: string;
  onChange?: (r: ColorResult) => void;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const PickerDialog: FC<PickerDialogProps> = ({ value, onClick, onChange }) => (
  <Box sx={{ position: "relative" }}>
    <Box sx={{ position: "absolute", zIndex: "2" }}>
      <Box
        sx={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }}
        onClick={onClick}
      />
      <ChromePicker color={value} onChange={onChange} />
    </Box>
  </Box>
);

export default PickerDialog;
