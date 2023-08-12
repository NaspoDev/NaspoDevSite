// Handles some effects and styling for the contact section.

// List of form-field objects
let formFields = document.querySelectorAll(".contact-form .form-field");
const fieldFilledClass = "field-filled";

// Adds blur event listeners to all form-fields
function addListeners() {
  formFields.forEach((element) => {
    element.addEventListener("blur", () => {
      checkValue(element);
    });
  });
}

/* Checks if the form-field has a value, if so, add the "field-filled" class.
Removes the class if the form-field becomes empty again.
Called when the form-field loses focus. */
function checkValue(formField) {
  let value = formField.value.trim();

  if (value !== "") {
    formField.classList.add(fieldFilledClass);
  } else {
    formField.classList.remove(fieldFilledClass);
  }
}

export function run() {
  addListeners();
}
