// Capturing elements
const cursor = document.getElementById("cursor");
const squareDecorOverlay1 = document.getElementById("square-decor-overlay-1");
const squareDecorOverlay2 = document.getElementById("square-decor-overlay-2");
const squareDecor1 = document.getElementById("square-decor-1");
const squareDecor2 = document.getElementById("square-decor-2");
const contactForm = document.getElementById("contact-form");

export function initializeListeners() {
  document.addEventListener("click", handleClick);
  document.addEventListener("scroll", handleScroll);
  // Called right before the page is about to be unloaded.
  window.addEventListener("onbeforeunload", handleOnBeforeUnload());
  squareDecorListeners();
}

function handleClick() {
  cursor.remove();
}

function handleScroll() {
  cursor.remove();
}

function handleOnBeforeUnload() {
  // Resetting the contact form.
  contactForm.reset();
}

function squareDecorListeners() {
  // square decor 1
  squareDecorOverlay1.addEventListener("mouseover", () => {
    squareDecor1.style.transform = "scale(0.9)";
  });
  squareDecorOverlay1.addEventListener("mouseout", () => {
    squareDecor1.style.transform = "scale(1)";
  });

  // square decor 2
  squareDecorOverlay2.addEventListener("mouseover", () => {
    squareDecor2.style.transform = "scale(0.9)";
  });
  squareDecorOverlay2.addEventListener("mouseout", () => {
    squareDecor2.style.transform = "scale(1)";
  });
}
