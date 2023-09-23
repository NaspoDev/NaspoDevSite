import { initializeListeners } from "./listeners.js";
import { runWelcomeScript } from "./scripts/welcome-script.js";
import { run as runTechGridScript } from "./scripts/tech-grid-script.js";
import { run as runScrollAnimations } from "./scripts/scroll-animations.js";
import { run as runProjectsScript } from "./scripts/projects-script.js";
import { run as runServicesScript } from "./scripts/services-script.js";
import { run as runContactScript } from "./scripts/contact-script.js";

import { initializeBlobs } from "./modules/blobs.js";
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
    runContactScript();

    initializeBlobs();
    console.log("Startup scripts executed!");
  },
};

// Run the application.
APP.init();
