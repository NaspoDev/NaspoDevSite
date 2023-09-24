import * as utils from "../modules/utility.js";
import { blobs } from "../modules/blobs.js";

// Runs opening animations on the home screen page. (Typewriter effect)

// elements involved in the animation. id is the id of the element, text is the text to be typed out.
const printStatementComponents = [
  { id: "print-statement-print", text: "print" },
  { id: "print-statement-bracket-1", text: "(" },
  { id: "print-statement-text", text: '"Hey there, I\'m\\nNaspo"' },
  { id: "print-statement-bracket-2", text: ")" },
];

// elements
const welcomeTextLetters = document.querySelectorAll(".welcome-text-letter");
const loadingCircle = document.getElementById("loading-circle-container");
const filePath = document.getElementById("file-path");
const processExitStatement = document.getElementById("process-exit-statement");
const cursor = document.getElementById("cursor");

const maxAnimationDelay = 15; // max animation delay for welcome text (in seconds)
let index = 0; // index for typeWriterEffect()
const speed = 100; // speed for typewriter effect (in milliseconds)

// Main function to run the welcome script. Handles flow of the script.
export async function runWelcomeScript() {
  // run typewriter effect for printStatementComponents
  for (const element of printStatementComponents) {
    await typeWriterEffect(element.id, element.text);
  }

  // Displaying and hiding certain elements after certain delays to simulate loading.
  await utils.delay(200);
  utils.showElement(loadingCircle);
  await utils.delay(1000);
  cursor.remove();
  utils.hideElement(loadingCircle);
  utils.showElement(filePath);
  await utils.delay(200);

  // display the welcome text
  displayWelcomeText();
  blobs.forEach((blob) => utils.showElement(blob.element));

  // wait a third of the max animation delay. (also convert to milliseconds)
  await utils.delay((maxAnimationDelay / 3) * 1000);
  utils.showElement(processExitStatement);
}

// async function to type out text in a typewriter effect.
async function typeWriterEffect(id, text) {
  if (index < text.length) {
    document.getElementById(id).innerHTML += text.charAt(index);
    index++;
    await utils.delay(speed);
    await typeWriterEffect(id, text);
  } else {
    index = 0;
  }
}

// Displays each character of welcome-text with a random font and random animation delay.
function displayWelcomeText() {
  for (const letter of welcomeTextLetters) {
    letter.style.animation = `welcome-script-fadein ${
      Math.random() * maxAnimationDelay
    }s`;
    utils.showElement(letter);
  }
}
