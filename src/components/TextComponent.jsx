import React from "react";
import { TextField } from "@mui/material";

const TextComponent = ({ question, value, onChange }) => (
  <TextField
    fullWidth
    label={question.label}
    placeholder={question.placeholder}
    required={question.required}
    value={value || ""}
    onChange={(e) => onChange(question.id, e.target.value)}
  />
);

export default TextComponent;
