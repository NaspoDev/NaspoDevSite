// Header Module. Handles header's scroll functionality.

const headerSpace = document.querySelector(".header-space");
const header = document.getElementById("header-div");

const headerHeight = header.offsetHeight;
// getBoundingClientRect() get position relative to the viewport,
// so we need to add the scroll Y offset.
const headerTopLimit = headerSpace.getBoundingClientRect().top + window.scrollY;
let lastScrollTop = headerTopLimit + headerHeight;

// Adjusts header position on based on scroll behaviour.
export function adjustHeader() {
  if (window.scrollY > headerTopLimit) {
    console.log(`window.scrollY: ${window.scrollY}`);
    console.log(`headerTopLimit: ${headerTopLimit}`);
    if (!(header.style.position === "fixed")) {
      header.style.position = "fixed";
    }
  } else {
    if (!(header.style.position === "sticky")) {
      header.style.position = "sticky";
    }
    return;
  }

  if (window.scrollY > lastScrollTop) {
    header.style.top = `-${headerHeight}px`;
  } else {
    header.style.top = "0px";
  }
  lastScrollTop = window.scrollY;
}
