// Handles intersection observer logic for scroll animations

let hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 1.0 }
);

export function run() {
  hiddenElements.forEach((element) => observer.observe(element));
}
