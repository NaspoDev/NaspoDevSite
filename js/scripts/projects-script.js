// Manages animations and display of proper project description for the projects section.

let projects = []; // array of project objects
let landingDescription = document.getElementById("landing-description"); // landing description element
const displayDescriptionClass = "displayed-description"; // class to apply to displayed description

//Project object. Holds the grid item and description for each project.
class Project {
  constructor(gridItem, description) {
    this.gridItem = gridItem;
    this.description = description;
  }
  initListeners() {
    this.gridItem.addEventListener("mouseover", () => {
      displayDescription(this);
    });
    this.gridItem.addEventListener("mouseout", () => {
      hideDescription(this);
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
