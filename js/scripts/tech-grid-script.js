// Displays the tech grid items in random grid slots on page load.

// tech grid DOM element and computed style version.
const techGrid = document.getElementById("tech-grid");
const techGridStyles = window.getComputedStyle(techGrid);

export function run() {

}

initElements() {
  
}

// list of grid items.
const gridItems = [];
for (let i = 0; i < techGrid.children.length; i++) {
  gridItems.push(techGrid.children[i]);
}

// List of GridSlot objects.
const gridSlots = [];
let rows = techGridStyles.gridTemplateRows.split(" ");
let columns = techGridStyles.gridTemplateColumns.split(" ");

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

createGridSlots((full = false));

// Create and add whcichever grid slots should be usable to the gridSLots array
function createGridSlots(full) {
  // if full is true. Add every single grid slot on the grid to gridSlots
  if (full) {
    // starting loop at 1 because css starts grid line count at 1
    for (let row = 1; row <= rows.length; row++) {
      for (let column = 1; column <= columns.length; column++) {
        gridSlots.push(new GridSlot(row, column));
      }
    }
    // if full is fale. Add grid slots in a cross pattern (no x or y neighbours).
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

// For each grid item, set it to a random slot (with random fadein animation).
for (let i = 0; i < gridItems.length; i++) {
  let gridSlot = undefined;
  while (true) {
    gridSlot = gridSlots[Math.floor(Math.random() * gridSlots.length)];
    if (!gridSlot.occupied) {
      break;
    }
  }

  gridItems[i].style.animation = `fadein ${Math.random() * 3}s`;
  gridItems[i].style.gridRow = gridSlot.getRowFormatted();
  gridItems[i].style.gridColumn = gridSlot.getColumnFormatted();
  gridSlot.occupied = true;
}
