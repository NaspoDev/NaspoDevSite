// Handles intersection observer logic for general scroll animations.

// Class name variables for the different types of animations.
const showHorizontalClass = "show-horizontal";
const showVerticalClass = "show-vertical";

// Array of hidden elements to be animated.
let hiddenHorizontalElements = document.querySelectorAll(".hidden-horizontal");
let hiddenVerticalElements = document.querySelectorAll(".hidden-vertical");

// Horizontal animation observer.
const horizontalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${showHorizontalClass}`);
      } else {
        entry.target.classList.remove(`${showHorizontalClass}`);
      }
    });
  },
  { threshold: 1.0 }
);

// Vertical animation observer.
const verticalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${showVerticalClass}`);
      } else {
        entry.target.classList.remove(`${showVerticalClass}`);
      }
    });
  },
  { threshold: 0.1 }
);

export function run() {
  hiddenHorizontalElements.forEach((element) =>
    horizontalObserver.observe(element)
  );
  hiddenVerticalElements.forEach((element) =>
    verticalObserver.observe(element)
  );
}
