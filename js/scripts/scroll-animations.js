// Handles intersection observer logic for scroll animations

let hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        entry.target.classList.add("show");
      } else {
        console.log("Not intersecting");
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 1.0 }
);

export function run() {
  hiddenElements.forEach((element) => observer.observe(element));
}
