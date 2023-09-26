// Listeners for the home section.

// Imports
import * as utils from "../utility/utils.js";

const terminalDisplay = document.getElementById("terminal-display");
const terminalCloseButton = document.getElementById("close-button-container");
const terminalEasterEgg = document.getElementById("terminal-easter-egg");

export function addHomeListeners() {
  // Terminal display close button click. (Can only be called once).
  terminalCloseButton.addEventListener("click", doTerminalEasterEgg, {
    once: true,
  });
}

// Closes the terminal and displays the easter egg for 3 seconds, then reverts.
async function doTerminalEasterEgg() {
  utils.hideElement(terminalDisplay);
  utils.showElement(terminalEasterEgg);
  await utils.delay(3000);
  utils.hideElement(terminalEasterEgg);
  utils.showElement(terminalDisplay);
}
