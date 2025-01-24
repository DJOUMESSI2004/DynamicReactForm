const formData = {
    sections: [
      {
        id: "section1",
        title: "Personal Information",
        questions: [
          {
            id: "q1",
            type: "text",
            label: "What is your full name?",
            placeholder: "Enter your name",
            required: true,
          },
          {
            id: "q2",
            type: "number",
            label: "How old are you?",
            placeholder: "Enter your age",
            required: true,
            validation: {
              min: 1,
              max: 120,
            },
          },
          {
            id: "q3",
            type: "selectOne",
            label: "What is your gender?",
            options: ["Male", "Female", "Other"],
            required: true,
          },
        ],
      },
      {
        id: "section2",
        title: "Preferences",
        questions: [
          {
            id: "q4",
            type: "selectMore",
            label: "What are your hobbies?",
            options: ["Reading", "Traveling", "Gaming", "Sports"],
            required: false,
          },
          {
            id: "q5",
            type: "text",
            label: "Describe your dream vacation:",
            placeholder: "Write your description here",
            required: false,
          },
        ],
      },
    ],
  };
  
  export default formData;
  