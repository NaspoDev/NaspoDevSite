export function initializeListeners() {
  // Initialize elements
  initElements();

  // Initialize listeners
  document.addEventListener("click", handleClick);
  document.addEventListener("scroll", handleScroll);
  squareDecorListeners();
}

// Capturing frequently used elements
let cursor;
let squareDecorOverlay1;
let squareDecorOverlay2;
let squareDecor1;
let squareDecor2;

function initElements() {
  cursor = document.getElementById("cursor");
  squareDecorOverlay1 = document.getElementById("square-decor-overlay-1");
  squareDecorOverlay2 = document.getElementById("square-decor-overlay-2");
  squareDecor1 = document.getElementById("square-decor-1");
  squareDecor2 = document.getElementById("square-decor-2");
}

function handleClick() {
  cursor.remove();
}

function handleScroll() {
  cursor.remove();
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
