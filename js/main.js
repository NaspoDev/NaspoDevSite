import { initializeListners } from "./listeners.js";
// import { run as runWelcomeScript } from "./scripts/welcome-script.js";
// import { run as runTechGridScript } from "./scripts/tech-grid-script.js";

// Main application functions on startup.
const APP = {
  date: new Date(),
  init() {
    console.log(this.date); // make this print a string
    this.initListners();
    // this.runScripts();
  },
  initListners() {
    initializeListners();
  },
  runScripts() {
    runWelcomeScript();
    runTechGridScript();
  },
};

// After HTML DOM content has been loaded, call APP.init.
document.addEventListener("DOMContentLoaded", APP.init);
