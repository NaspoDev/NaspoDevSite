import { initializeListners } from "./listeners";
import { run as runWelcomeScript } from "./scripts/welcome-script";
import { run as runTechGridScript } from "./scripts/tech-grid-script";

// Main application functions on startup.
const APP = {
  date: new Date(),
  init() {
    console.log(this.date);
    this.initListners();
    this.runScripts();
  },
  initListners() {
    initializeListners();
  },
  runScripts() {
    runWelcomeScript();
    runTechGridScript();
  },
};

// After HTML DOM content has been loaded, call APP.init().
document.addEventListener("DOMContentLoaded", APP.init());
