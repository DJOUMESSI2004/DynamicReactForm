import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import SectionForm from "./components/SectionForm";
import Summary from "./components/Summary";
import formData from "./data/formData";

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const sections = formData.sections;

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else {
      setCurrentSection(sections.length); // Switch to Summary
    }
  };

  return (
    <Box p={4}>
      <Stepper activeStep={currentSection} alternativeLabel>
        {sections.map((section) => (
          <Step key={section.id}>
            <StepLabel>{section.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>
        {currentSection < sections.length ? (
          <SectionForm
            section={sections[currentSection]}
            answers={answers}
            setAnswers={setAnswers}
            onNext={handleNext}
          />
        ) : (
          <Summary answers={answers} sections={sections} />
        )}
      </Box>
    </Box>
  );
};

export default App;
