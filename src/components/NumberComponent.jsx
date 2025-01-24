import React from "react";
import { TextField } from "@mui/material";

const NumberComponent = ({ question, value, onChange }) => (
  <TextField
    fullWidth
    type="number"
    label={question.label}
    placeholder={question.placeholder}
    required={question.required}
    inputProps={{ min: question.validation?.min, max: question.validation?.max }}
    value={value || ""}
    onChange={(e) => onChange(question.id, e.target.value)}
  />
);

export default NumberComponent;
