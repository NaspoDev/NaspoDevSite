import { initializeListeners } from "./listeners.js";
import { run as runWelcomeScript } from "./scripts/welcome-script.js";
// import { run as runTechGridScript } from "./scripts/tech-grid-script.js";

// Main application functions on startup.
const APP = {
  date: new Date(),
  init() {
    console.log(this.date.toString());
    this.addListeners();
    this.runScripts();
  },
  addListeners() {
    initializeListeners();
    console.log("Listeners initialized!");
  },
  runScripts() {
    console.log("Running startup scripts...");
    runWelcomeScript();
    // runTechGridScript();
  },
};

// After HTML DOM content has been loaded, call APP.init.
document.addEventListener("DOMContentLoaded", APP.init.bind(APP));
