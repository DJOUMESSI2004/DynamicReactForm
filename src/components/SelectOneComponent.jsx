import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const SelectOneComponent = ({ question, value, onChange }) => (
  <FormControl fullWidth required={question.required}>
    <FormLabel>{question.label}</FormLabel>
    <RadioGroup
      value={value || ""}
      onChange={(e) => onChange(question.id, e.target.value)}
    >
      {question.options.map((option) => (
        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </FormControl>
);

export default SelectOneComponent;
