import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Question from "./Question";

const SectionForm = ({ section, answers, setAnswers, onNext }) => {
    
  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isCompleted = section.questions.every(
    (q) => !q.required || answers[q.id]
  );

  return (
    <Box>
      <Typography variant="h5" mb={2}>
        {section.title}
      </Typography>
      {section.questions.map((question) => (
        <Box key={question.id} mb={2}>
          <Question
            question={question}
            value={answers[question.id]}
            onChange={handleChange}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
        disabled={!isCompleted}
      >
        Save & Next
      </Button>
    </Box>
  );
};

export default SectionForm;
