import { initializeListeners } from "./listeners.js";
import { run as runWelcomeScript } from "./scripts/welcome-script.js";
import { run as runTechGridScript } from "./scripts/tech-grid-script.js";
import { run as runScrollAnimations } from "./scripts/scroll-animations.js";
import { run as runProjectsScript } from "./scripts/projects-script.js";
import { run as runServicesScript } from "./scripts/services-script.js";

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
    runWelcomeScript();
    runTechGridScript();
    runScrollAnimations();
    runProjectsScript();
    runServicesScript();
    console.log("Startup scripts executed!");
  },
};

// Run the application.
// (Waiting for DOMContentLoaded event is not necessary because the scripts are loaded at the end of the body tag).
APP.init();
