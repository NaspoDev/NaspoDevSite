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
