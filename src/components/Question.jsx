import React from "react";
import TextComponent from "./TextComponent";
import NumberComponent from "./NumberComponent";
import SelectOneComponent from "./SelectOneComponent";
import SelectMoreComponent from "./SelectMoreComponent";

const Question = ({ question, value, onChange }) => {
  switch (question.type) {
    case "text":
      return <TextComponent question={question} value={value} onChange={onChange} />;
    case "number":
      return <NumberComponent question={question} value={value} onChange={onChange} />;
    case "selectOne":
      return <SelectOneComponent question={question} value={value} onChange={onChange} />;
    case "selectMore":
      return <SelectMoreComponent question={question} value={value} onChange={onChange} />;
    default:
      return null;
  }
};

export default Question;
