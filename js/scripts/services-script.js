// Handles other animations for the services section.

let lineDecor = document.getElementById("services-line-decor");

// Animation observer for line decor animation
const lineDecorObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lineDecor.classList.add("line-decor-show");
    } else {
      lineDecor.classList.remove("line-decor-show");
    }
  });
});

export function runServicesScript() {
  lineDecorObserver.observe(lineDecor);
}
