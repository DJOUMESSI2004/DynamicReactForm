import React from "react";
import { Box, Typography } from "@mui/material";

const Summary = ({ answers, sections }) => (
  <Box>
    <Typography variant="h5" mb={2}>
      Summary
    </Typography>
    {sections.map((section) => (
      <Box key={section.id} mb={2}>
        <Typography variant="h6">{section.title}</Typography>
        {section.questions.map((question) => (
          <Typography key={question.id}>
            <strong>{question.label}:</strong> {JSON.stringify(answers[question.id] || "N/A")}
          </Typography>
        ))}
      </Box>
    ))}
  </Box>
);

export default Summary;
