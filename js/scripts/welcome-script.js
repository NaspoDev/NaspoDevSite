import * as utils from "../modules/utility.js";
import { blobs } from "../modules/blobs.js";

// Runs opening animations on the home screen page. (Typewriter effect)

// print statement to by typed out with typewriter effect
// id: id of element, text: text to type out
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

// typeWriterEffect() variables
const maxAnimationDelay = 10; // max animation delay for welcome text (in seconds)
let index = 0; // index for typeWriterEffect()
const speed = 100; // speed for typewriter effect (in milliseconds)

// textGlitchEffect() variables
const glitchFonts = ["Glitch Goblin", "Blue Screen"]; // font face for glitch effect font
const naspoLetters = document.querySelectorAll(
  ".welcome-text-container h1 .welcome-text-letter"
);
const minRepeatDelay = 0.2; // minimum delay between repeat of glitch effect (in seconds)
const maxRepeatDelay = 0.6; // maximum delay between repeat of glitch effect (in seconds)
const minResetDelay = 0.3; // minimum delay before resetting the font (in seconds)
const maxResetDelay = 0.6; // maximum delay before resetting the font (in seconds)
const maxIterations = 8; // maximum number of iterations of the glitch effect
let iteration = 0;

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
  // display blobs
  blobs.forEach((blob) => utils.showElement(blob.element));

  // wait a third of the max animation delay. (also convert to milliseconds)
  await utils.delay((maxAnimationDelay / 3) * 1000);
  utils.showElement(processExitStatement); // display process exit statement

  await utils.delay(1500);
  textGlitchEffect(); // run the glitch effect
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

// Randomly change the font of letters from "Naspo" in welcome text.
// Creates a glitch effect.
async function textGlitchEffect() {
  if (iteration >= maxIterations) {
    return;
  }

  let randomLetter =
    welcomeTextLetters[Math.floor(Math.random() * welcomeTextLetters.length)];
  let glitchFont = glitchFonts[Math.floor(Math.random() * glitchFonts.length)];

  // wait for a delay between min and max repeat delay before executing the effect
  await utils.delay(
    (Math.random() * (maxRepeatDelay - minRepeatDelay) + minRepeatDelay) * 1000
  );

  // set font to glitch font
  randomLetter.style.fontFamily = glitchFont;

  // wait for a small delay before resetting the font
  await utils.delay(
    (Math.random() * (maxResetDelay - minResetDelay) + minResetDelay) * 1000
  );
  randomLetter.style.fontFamily = "inherit";

  iteration++;
  textGlitchEffect(); // repeat the effect
}
