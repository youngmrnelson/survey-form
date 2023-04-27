# Survey Form

This is a web application that aims to replicate the functionality of [https://survey-form.freecodecamp.rocks](https://survey-form.freecodecamp.rocks). It allows users to input various information in a form and submit it for processing.

## Live Preview

[https://youngmrnelson.github.io/survey-form-FCC/](https://youngmrnelson.github.io/survey-form-FCC/)

## User Stories

1. **Page Title**: As a user, I can see a page title in an `h1` element with an id of `title`.
2. **Short Explanation**: As a user, I can read a short explanation in a `p` element with an id of `description`.
3. **Form Element**: As a user, I can see a form element with an id of `survey-form` that contains the following fields:
   - Name: An input field with an id of `name` and a type of `text` is provided for entering a name.
   - Email: An input field with an id of `email` is provided for entering an email address.
     - If an incorrectly formatted email is entered, an HTML5 validation error is displayed.
   - Number: An input field with an id of `number` is provided for entering a number.
     - The input field should only accept numeric values and show an HTML5 validation error if non-numeric values are entered.
     - The input field has defined min and max attributes to restrict the input range. If numbers outside this range are entered, an HTML5 validation error is displayed.
   - Labels: Corresponding label elements with ids of `name-label`, `email-label`, and `number-label` are provided for the name, email, and number input fields respectively, to describe the purpose of each field.
   - Placeholder Text: Placeholder text is provided for the name, email, and number input fields to give a description or instructions for each field.
   - Dropdown: A select dropdown element with an id of `dropdown` is provided with at least two options to choose from.
   - Radio Buttons: At least two radio buttons are provided inside the form element, grouped using the `name` attribute, allowing the user to select an option.
   - Checkboxes: Several checkboxes are provided inside the form element, each with a value attribute, allowing the user to select multiple options.
   - Textarea: A textarea element is provided for additional comments.
   - Submit Button: A button with an id of `submit` is provided to submit all the inputs.

## Technologies Used

This web application was built using HTML5 and CSS3 for front-end development. It utilizes various HTML5 form elements such as input fields, select dropdowns, radio buttons, checkboxes, and textarea for user input. CSS3 is used for styling and layout of the form elements. The application also incorporates HTML5 validation for email format, numeric input, and input range.

## Contact

[Daniel Nelson](https://www.linkedin.com/in/daniel-nelson-9151a6212/)
