import React from "react";
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const SelectMoreComponent = ({ question, value = [], onChange }) => {
  const handleCheckboxChange = (option) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange(question.id, newValue);
  };

  return (
    <FormControl fullWidth>
      <FormLabel>{question.label}</FormLabel>
      <FormGroup>
        {question.options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={value.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default SelectMoreComponent;
