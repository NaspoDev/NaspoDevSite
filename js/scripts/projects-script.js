// Manages animations and display of proper project description for the projects section.

let projects = []; // array of project objects
let landingDescription = document.getElementById("landing-description"); // landing description element
const displayDescriptionClass = "displayed-description"; // class to apply to displayed description
const scrollingTextClass = "scrolling"; // class to apply to scrolling text
// array of hidden projects to be animated on scroll
let hiddenProjects = document.querySelectorAll(
  ".projects-grid .project-hidden"
);

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

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("project-appear");
      } else {
        entry.target.classList.remove("project-appear");
      }
    }
  },
  { threshold: 0.7 }
);

export function run() {
  initProjects();
  initListeners();
  observeProjects();
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

// Observe projects (from hiddenProjects array) to be animated on scroll.
function observeProjects() {
  hiddenProjects.forEach((element) => observer.observe(element));
}

// Displays the description for the given project, and hides the landing description.
function displayDescription(project) {
  if (project.description) {
    project.description.classList.add(displayDescriptionClass);
    landingDescription.classList.remove(displayDescriptionClass);
  }
}

// Hides the description for the given project, and displays the landing description.
function hideDescription(project) {
  if (project.description) {
    project.description.classList.remove(displayDescriptionClass);
    landingDescription.classList.add(displayDescriptionClass);
  }
}

// Applies scrolling text to the given project, and removes it from the first project. Also hides the project title & image.
function applyScrollingText(project) {
  if (project.gridItem != document.getElementById("project-1")) {
    // applying scrolling text
    project.gridItem
      .querySelector(".scrolling-text-wrapper")
      .classList.add(scrollingTextClass);
    // hiding project title & image (if not on mobile display)
    if (window.innerWidth >= 1200) {
      project.gridItem.querySelector(".project-content h2").style.opacity = 0;
      project.gridItem.querySelector(".project-content img").style.opacity = 0;
    }
    // removing scrolling text from first project
    document
      .querySelector(".project-1 .scrolling-text-wrapper")
      .classList.remove(scrollingTextClass);
  }
}

// Removes scrolling text from the given project, and applies it to the first project. Also displays the project title & image.
function removeScrollingText(project) {
  // removing scrolling text
  project.gridItem
    .querySelector(".scrolling-text-wrapper")
    .classList.remove(scrollingTextClass);
  // displaying project title & image
  project.gridItem.querySelector(".project-content h2").style.opacity = 1;
  project.gridItem.querySelector(".project-content img").style.opacity = 1;
  // applying scrolling text to first project
  document
    .querySelector(".project-1 .scrolling-text-wrapper")
    .classList.add(scrollingTextClass);
}
