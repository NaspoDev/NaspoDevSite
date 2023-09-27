// Listeners for the home section.

// Imports
import * as utils from "../utility/utils.js";

const terminalDisplay = document.getElementById("terminal-display");

// terminal easter egg related elements.
const terminalCloseButton = document.getElementById("close-button-container");
const terminalEasterEgg = document.getElementById("terminal-easter-egg");

// terminal options button related elements.
const terminalOptionsButton = document.getElementById(
  "options-button-container"
);
const terminalOptionsDropdown = document.getElementById(
  "terminal-options-dropdown"
);

export function addHomeListeners() {
  // Terminal display close button click. (Can only be called once).
  terminalCloseButton.addEventListener("click", doTerminalEasterEgg, {
    once: true,
  });

  // Terminal options button click.
  terminalOptionsButton.addEventListener(
    "click",
    toggleTerminalOptionsDropdown
  );
}

// Closes the terminal and displays the easter egg for 3 seconds, then reverts.
async function doTerminalEasterEgg() {
  utils.hideElement(terminalDisplay);
  utils.showElement(terminalEasterEgg);
  await utils.delay(3000);
  utils.hideElement(terminalEasterEgg);
  utils.showElement(terminalDisplay);
}

// Toggles the terminal options dropdown visibility.
function toggleTerminalOptionsDropdown() {
  // If hidden, show it.
  if (terminalOptionsDropdown.classList.contains("hidden")) {
    // Remove hidden class and enable pointer events.
    utils.showElement(terminalOptionsDropdown);
    terminalOptionsDropdown.style.pointerEvents = "auto";

    // If visible, hide it.
  } else {
    // Add hidden class and disable pointer events.
    utils.hideElement(terminalOptionsDropdown);
    terminalOptionsDropdown.style.pointerEvents = "none";
  }
}
