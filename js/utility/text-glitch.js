// Text glitch effect module

// Imports
import * as utils from "./utils.js";

// array of glitch font faces
const glitchFonts = ["Glitch Goblin", "Blue Screen"];

// config options for the behaviour of the glitch effect
const config = {
  minRepeatDelay: 0.05, // minimum delay between repeat of glitch effect (in seconds)
  maxRepeatDelay: 0.6, // maximum delay between repeat of glitch effect (in seconds)
  minResetDelay: 0.3, // minimum delay before resetting the font (in seconds)
  maxResetDelay: 0.6, // maximum delay before resetting the font (in seconds)
};

let iteration = 0; // iteration counter

// Randomly change the font of passed in letters. Creates a glitch effect.
export async function textGlitchEffect(letters, iterations = 4) {
  // if done, reset iteration counter and return
  if (iteration >= iterations) {
    iteration = 0;
    return;
  }

  // select a random letter from the letters array
  let randomLetter = letters[Math.floor(Math.random() * letters.length)];

  // select a random font from the glitchFonts array
  let glitchFont = glitchFonts[Math.floor(Math.random() * glitchFonts.length)];

  // wait for a delay between min and max repeat delay before executing the effect
  await utils.delay(
    (Math.random() * (config.maxRepeatDelay - config.minRepeatDelay) +
      config.minRepeatDelay) *
      1000
  );

  // set font to glitch font
  randomLetter.style.fontFamily = glitchFont;

  // wait for a small delay before resetting the font
  await utils.delay(
    (Math.random() * (config.maxResetDelay - config.minResetDelay) +
      config.minResetDelay) *
      1000
  );
  randomLetter.style.fontFamily = "inherit";

  iteration++;
  textGlitchEffect(letters, iterations); // repeat the effect
}
