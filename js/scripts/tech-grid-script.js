// Displays the tech grid items in random grid slots on page load.

// tech grid DOM element and computed style version.
const techGrid = document.getElementById("tech-grid");
const techGridStyles = window.getComputedStyle(techGrid);

let gridItems = []; // array of all grid items
let gridSlots = []; // array of grid slots in the gird
let rows = techGridStyles.gridTemplateRows.split(" "); // array of rows
let columns = techGridStyles.gridTemplateColumns.split(" "); // array of columns

const maxShowAnimationTime = 3; // max animation time to show grid items (in seconds)
const maxHideAnimationTime = 1; // max animation time to hide grid items (in seconds)

// Intersection observer to check if the tech grid is visible on the screen.
let observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      showGridItems();
    } else {
      hideGridItems();
    }
  },
  { threshold: 0.7 }
);

export function run() {
  fillGridItems();
  createGridSlots(false);
  setGridItemPositions();
  observer.observe(techGrid);
}

// Fill the girdItems array with all the grid items. (Children of the techGrid element).
function fillGridItems() {
  for (let i = 0; i < techGrid.children.length; i++) {
    gridItems.push(techGrid.children[i]);
  }
}

// GridSlot object class
class GridSlot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.occupied = false;
  }

  getRowFormatted() {
    return `${this.row} / ${this.row + 1}`;
  }

  getColumnFormatted() {
    return `${this.column} / ${this.column + 1}`;
  }
}

// Create and add whichever grid slots should be usable to the gridSLots array.
function createGridSlots(full) {
  // if full is true, add every single grid slot on the grid to gridSlots
  if (full) {
    // starting loop at 1 because css starts grid line count at 1
    for (let row = 1; row <= rows.length; row++) {
      for (let column = 1; column <= columns.length; column++) {
        gridSlots.push(new GridSlot(row, column));
      }
    }
    // if full is false, add grid slots in a cross pattern (no x or y neighbours).
  } else {
    let selectorOffset = 0;
    for (let row = 1; row <= rows.length; row++) {
      if (row % 2 !== 1) {
        selectorOffset = 1;
      } else {
        selectorOffset = 0;
      }
      for (let column = 1; column <= columns.length; column += 2) {
        gridSlots.push(new GridSlot(row, column + selectorOffset));
      }
    }
  }
}

// For each grid item, assign it a random slot.
function setGridItemPositions() {
  for (let i = 0; i < gridItems.length; i++) {
    let gridSlot = undefined;
    while (true) {
      gridSlot = gridSlots[Math.floor(Math.random() * gridSlots.length)];
      if (!gridSlot.occupied) {
        break;
      }
    }

    gridItems[i].style.gridRow = gridSlot.getRowFormatted();
    gridItems[i].style.gridColumn = gridSlot.getColumnFormatted();
    gridSlot.occupied = true;
  }
}

// Show grid items in their slots with a fade in animation.
function showGridItems() {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.opacity = 0.2;
    gridItems[i].style.animation = `fadein ${
      Math.random() * maxShowAnimationTime
    }s`;
  }
}

// Hide grid items with a fade out animation.
function hideGridItems() {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.animation = `fadeout ${
      Math.random() * maxHideAnimationTime
    }s`;
    gridItems[i].style.opacity = 0;
  }
}
