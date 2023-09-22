/* 
Header Module
Handles header scroll functionality.
*/

// for stickyHeaeder()
let header = document.getElementById("header-div");
let stickyOffset = header.offsetTop;

// for adjustHeader()
let lastScrollTop = header.offsetTop;
let headerHeight = header.offsetHeight;

export function stickyHeader() {
  if (window.scrollY >= stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

export function adjustHeader() {
  if (window.scrollY > lastScrollTop) {
    header.style.top = `-${headerHeight}px`;
  } else {
    header.style.top = "0px";
  }
  lastScrollTop = window.scrollY;
}
