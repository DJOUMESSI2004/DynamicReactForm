# Dynamic Form Builder

A ReactJS application to create and manage dynamic forms based on JSON configuration.

## Features

- Dynamic input types: Text, Number, Single Select, Multi Select.

- Multi-section form with step-by-step navigation.

- Summary of responses at the end.

- Validation for required fields and number ranges.

## Getting Started

### Prerequisites

. Node.js (v14 or higher)

. npm or yarn

### Installation

1. Clone the repository:

git clone https://github.com/DJOUMESSI2004/DynamicReactForm.git
cd dynamic-form-builder

1. Install dependencies:

    npm install
    # OR
    yarn install

3. Start the application:

    npm start
    # OR
    yarn start

4. Open the application: Navigate to http://localhost:3000 in your browser.

## Configuration

The form is configured in src/data/formData.js:

const formData = {
  sections: [
    {
      id: "section1",
      title: "Personal Information",
      questions: [
        {
          id: "q1",
          type: "text", // Supported types: text, number, selectOne, selectMore
          label: "What is your name?",
          required: true,
        },
      ],
    },
  ],
};

### Input Types

- Text: Single-line text input.

- Number: Numeric input with optional min/max validation.

- SelectOne: Radio buttons for one choice.

- SelectMore: Checkboxes for multiple choices.

### Technologies Used

- ReactJS: Frontend framework for building UI components.

- Material-UI (MUI): UI component library for styling and layout.

### License

This project is licensed under the MIT License.
