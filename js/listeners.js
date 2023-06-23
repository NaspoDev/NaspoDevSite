// Capturing frequently used elements
const cursor = document.getElementById("cursor");
const squareDecorOverlay1 = document.getElementById("square-decor-overlay-1");
const squareDecorOverlay2 = document.getElementById("square-decor-overlay-2");

// Page click anywhere event
document.addEventListener("click", (event) => {
  cursor.remove();
});

// Page scroll event
document.addEventListener("scroll", (event) => {
  cursor.remove();
});

// square decor mouseover event
window.addEventListener("mouseover", (event) => {
  if (event.target === squareDecorOverlay1) {
    document.getElementById("square-decor-1").style.transform = "scale(0.9)";
  } else if (event.target === squareDecorOverlay2) {
    document.getElementById("square-decor-2").style.transform = "scale(0.9)";
  }
});

// square decor mouseout event
window.addEventListener("mouseout", (event) => {
  if (event.target === squareDecorOverlay1) {
    document.getElementById("square-decor-1").style.transform = "scale(1)";
  } else if (event.target === squareDecorOverlay2) {
    document.getElementById("square-decor-2").style.transform = "scale(1)";
  }
});
