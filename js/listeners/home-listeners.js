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
// needed for click event listener.
const terminalOptionsButtonIcon = document.querySelector(
  "#options-button-container img"
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

  window.addEventListener("scroll", () => {
    if (!terminalOptionsDropdown.classList.contains("hidden")) {
      utils.hideElement(terminalOptionsDropdown);
    }
  });

  window.addEventListener("click", (event) => {
    console.log(event.target);
    if (!terminalOptionsDropdown.classList.contains("hidden")) {
      if (
        event.target !== terminalOptionsButton &&
        // for some reason, must also check for the icon.
        event.target !== terminalOptionsButtonIcon &&
        event.target !== terminalOptionsDropdown
      ) {
        hideTerminalOptionsDropdown();
      }
    }
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

// Toggles the terminal options dropdown visibility.
function toggleTerminalOptionsDropdown() {
  // If hidden, show it.
  if (terminalOptionsDropdown.classList.contains("hidden")) {
    showTerminalOptionsDropdown();

    // If visible, hide it.
  } else {
    hideTerminalOptionsDropdown();
  }
}

function showTerminalOptionsDropdown() {
  utils.showElement(terminalOptionsDropdown);
  terminalOptionsDropdown.style.pointerEvents = "auto";
}

function hideTerminalOptionsDropdown() {
  utils.hideElement(terminalOptionsDropdown);
  terminalOptionsDropdown.style.pointerEvents = "none";
}
