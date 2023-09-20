// Handles general listeners for the website.

// Imports
import { stickyHeader, adjustHeader } from "./modules/header.js";

// Capturing elements
const contactForm = document.getElementById("contact-form");

export function initializeListeners() {
  // Document click event
  document.addEventListener("click", () => {});

  // Window scroll event
  window.addEventListener("scroll", () => {
    console.log("SCROLLING!");
    stickyHeader();
    adjustHeader();
  });

  // Called right before the page is about to be unloaded.
  window.addEventListener("beforeunload", () => {
    contactForm.reset();
  });

  // squareDecorListeners();
}

// Handles square decor animations (home section).
function squareDecorListeners() {
  const squareDecorOverlay1 = document.getElementById("square-decor-overlay-1");
  const squareDecorOverlay2 = document.getElementById("square-decor-overlay-2");
  const squareDecor1 = document.getElementById("square-decor-1");
  const squareDecor2 = document.getElementById("square-decor-2");

  // square decor 1
  squareDecorOverlay1.addEventListener("mouseover", () => {
    squareDecor1.style.transform = "scale(0.9)";
  });
  squareDecorOverlay1.addEventListener("mouseout", () => {
    squareDecor1.style.transform = "scale(1)";
  });

  // square decor 2
  squareDecorOverlay2.addEventListener("mouseover", () => {
    squareDecor2.style.transform = "scale(0.9)";
  });
  squareDecorOverlay2.addEventListener("mouseout", () => {
    squareDecor2.style.transform = "scale(1)";
  });
}
