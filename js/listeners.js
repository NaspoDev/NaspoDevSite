// Capturing frequently used elements
const cursor = document.getElementById("cursor");

// Page click anywhere event
document.addEventListener("click", (event) => {
  cursor.remove();
});

// Page scroll event
document.addEventListener("scroll", (event) => {
  cursor.remove();
});

// Parallax scroll effect listener
// Listens for scroll event
window.addEventListener("scroll", () => {
  let box1 = document.getElementById("parallax-box-1");
  let box2 = document.getElementById("parallax-box-2");
  box1.style.transform = "translateY(" + window.scrollY * 0.2 + "px)";
  box2.style.transform = "translateY(" + window.scrollY * -0.2 + "px)";
});
