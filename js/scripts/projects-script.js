// Manages animations and display of proper project description for the projects section.

let projects = []; // array of project objects
let landingDescription = document.getElementById("landing-description"); // landing description element
const displayDescriptionClass = "displayed-description"; // class to apply to displayed description
const scrollingTextClass = "scrolling"; // class to apply to scrolling text

//Project object. Holds the grid item and description for each project.
class Project {
  constructor(gridItem, description) {
    this.gridItem = gridItem;
    this.description = description;
  }
  initListeners() {
    this.gridItem.addEventListener("mouseover", () => {
      displayDescription(this);
      applyScrollingText(this);
    });
    this.gridItem.addEventListener("mouseout", () => {
      hideDescription(this);
      removeScrollingText(this);
    });
  }
}

export function run() {
  initProjects();
  initListeners();
}

// Initialize project objects and add them to the projects array.
function initProjects() {
  for (let i = 1; i <= 4; i++) {
    projects.push(
      new Project(
        document.getElementById(`project-${i}`),
        document.getElementById(`project-${i}-description`)
      )
    );
  }
}

function initListeners() {
  // Initialize project listeners
  for (const project of projects) {
    project.initListeners();
  }
}

// Displays the description for the given project, and hides the landing description
function displayDescription(project) {
  if (project.description) {
    project.description.classList.add(displayDescriptionClass);
    landingDescription.classList.remove(displayDescriptionClass);
  }
}

// Hides the description for the given project, and displays the landing description
function hideDescription(project) {
  if (project.description) {
    project.description.classList.remove(displayDescriptionClass);
    landingDescription.classList.add(displayDescriptionClass);
  }
}

// Applies scrolling text to the given project, and removes it from the first project. Also hides the project title.
function applyScrollingText(project) {
  if (project.gridItem != document.getElementById("project-1")) {
    project.gridItem
      .querySelector(".scrolling-text-wrapper")
      .classList.add(scrollingTextClass);
    project.gridItem.querySelector(".project-content h2").style.opacity = 0;
    document
      .querySelector(".project-1 .scrolling-text-wrapper")
      .classList.remove(scrollingTextClass);
  }
}

// Removes scrolling text from the given project, and applies it to the first project. Also displays the project title.
function removeScrollingText(project) {
  project.gridItem
    .querySelector(".scrolling-text-wrapper")
    .classList.remove(scrollingTextClass);
  project.gridItem.querySelector(".project-content h2").style.opacity = 1;
  document
    .querySelector(".project-1 .scrolling-text-wrapper")
    .classList.add(scrollingTextClass);
}
