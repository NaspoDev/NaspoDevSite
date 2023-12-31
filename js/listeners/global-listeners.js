// Handles general global listeners for the website.

// Imports
import { adjustHeader } from "../modules/header.js";

// Capturing elements
const contactForm = document.getElementById("contact-form");

export function addGlobalListeners() {
  // Window scroll event
  window.addEventListener("scroll", () => {
    adjustHeader();
  });

  // Called right before the page is about to be unloaded.
  window.addEventListener("beforeunload", () => {
    contactForm.reset();
  });
}
