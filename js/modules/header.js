// Handles header scroll functionality.
// Disappears on scroll down, appears on scroll up.

let lastScrollTop = 0;
let header = document.getElementById("header-div");
let headerHeight = header.offsetHeight;

// Adjusts header position on based on scroll behaviour.
export function adjustHeader() {
  if (window.scrollY > lastScrollTop) {
    header.style.top = `-${headerHeight}px`;
  } else {
    header.style.top = "0px";
  }
  lastScrollTop = window.scrollY;
}
