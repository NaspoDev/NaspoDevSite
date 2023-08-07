// Handles intersection observer logic for scroll animations

let hiddenElements = document.querySelectorAll(".hidden-top");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-top");
      } else {
        entry.target.classList.remove("show-top");
      }
    });
  },
  { threshold: 0.1 }
);

export function run() {
  hiddenElements.forEach((element) => observer.observe(element));
}
