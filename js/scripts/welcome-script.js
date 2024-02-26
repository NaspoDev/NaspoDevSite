// Control flow for the opening animations and processes on the home screen page.

// Imports
import * as utils from "../utility/utils.js";
import { typeWriterEffect } from "../utility/typewriter.js";
import { textGlitchEffect } from "../utility/text-glitch.js";
import { blobs } from "../modules/blobs.js";

// print statement to by typed out with typewriter effect
// id: id of element, text: text to type out
const printStatementComponents = [
  { id: "print-statement-print", text: "print" },
  { id: "print-statement-bracket-1", text: "(" },
  { id: "print-statement-text", text: '"Hey there, I\'m\\nNaspo"' },
  { id: "print-statement-bracket-2", text: ")" },
];

// elements
const cursor = document.getElementById("cursor");
const loadingCircle = document.getElementById("loading-circle-container");
const filePath = document.getElementById("file-path");
const welcomeTextLetters = document.querySelectorAll(".welcome-text-letter");
const processExitStatement = document.getElementById("process-exit-statement");
const sectionButtons = document.querySelectorAll(".section-button");

// variables
const maxAnimationDelay = 5; // max animation delay for welcome text (in seconds)
const typeWriterSpeed = 100; // speed for typewriter effect (in milliseconds)
const textGlitchIterations = 8; // number of iterations for glitch effect

// Main function to run the welcome script. Handles flow of the processes.
export async function runWelcomeScript() {
  // STEP #1: run typewriter effect for printStatementComponents
  for (const element of printStatementComponents) {
    await typeWriterEffect(element.id, element.text, typeWriterSpeed);
  }

  // STEP #2: Displaying and hiding certain elements after certain delays to simulate loading.
  await utils.delay(200);
  utils.showElement(loadingCircle);
  await utils.delay(1000);
  cursor.remove();
  utils.hideElement(loadingCircle);
  utils.showElement(filePath);
  await utils.delay(200);

  // STEP #3: Display core elements (welcome text, section buttons, blobs).
  // display the welcome text
  displayWelcomeText();
  // show the section buttons
  for (const sectionButton of sectionButtons) {
    utils.showElement(sectionButton);
  }
  // display blobs
  blobs.forEach((blob) => utils.showElement(blob.element));

  // STEP #4: Display the process exit statement.
  // wait a third of the max animation delay. (also convert to milliseconds)
  await utils.delay((maxAnimationDelay / 3) * 1000);
  utils.showElement(processExitStatement); // display process exit statement

  // STEP #5: Run the text glitch effect on the welcome text.
  await utils.delay(1500);
  textGlitchEffect(welcomeTextLetters, textGlitchIterations); // run the glitch effect
}

// Displays each character of welcome-text with a random animation delay.
function displayWelcomeText() {
  for (const letter of welcomeTextLetters) {
    letter.style.animation = `welcome-script-fadein ${
      Math.random() * maxAnimationDelay
    }s`;
    utils.showElement(letter);
  }
}
