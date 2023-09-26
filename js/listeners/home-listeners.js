// Listeners for the home section.

const terminalDisplay = document.getElementById("terminal-display");

export function addHomeListeners() {
  // Terminal display
  terminalDisplay.addEventListener("click", () => {
    terminalDisplay.classList.toggle("terminal-display--active");
  });
}
