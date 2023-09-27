// Handles some effects and styling for the contact section.

// List of form-field objects
let formFields = document.querySelectorAll(".contact-form .form-field");
const fieldFilledClass = "field-filled";

export function addContactListeners() {
  // Adds blur event listeners to all form-fields.
  /* blur event is triggered when an element loses focus.
When a form-field loses focus, check if it has a value, so that
the "field-filled" class can be added or removed accordingly. */
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
