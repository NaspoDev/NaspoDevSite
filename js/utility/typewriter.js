// Typewriter effect utility module.

// Imports
import * as utils from "./utility.js";

let index = 0; // index for typeWriterEffect()

// async function to type out text in a typewriter effect.
// speedMilliseconds is the speed at which each character is typed out.
export async function typeWriterEffect(
  elementId,
  text,
  speedMilliseconds = 100
) {
  if (index < text.length) {
    // append the next character to the html element
    document.getElementById(elementId).innerHTML += text.charAt(index);
    index++;

    // wait for the specified delay before typing out the next character
    await utils.delay(speedMilliseconds);
    await typeWriterEffect(elementId, text);
  } else {
    // when finished, reset the index
    index = 0;
  }
}
