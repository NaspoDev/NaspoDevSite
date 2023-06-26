// Displays the tech grid items in random grid slots on page load.

// tech grid DOM element and computed style version.
const techGrid = document.getElementById("tech-grid");
const techGridStyles = window.getComputedStyle(techGrid);

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
    let occupied = false;
  }

  getRowFormatted() {
    return `${row} / ${row + 1}`;
  }
}

// adding each possible grid slot to gridSlots array
// (starting loop at 1 because css starts grid line count at 1)
for (let row = 1; row <= rows.length; row++) {
  for (let column = 1; column <= columns.length; column++) {
    gridSlots.push(new GridSlot(row, column));
  }
}

for (let i = 0; i < gridItems; i++) {
  do {
    let gridSlot = gridSlots[Math.floor(Math.random() * gridSlots.length)];
    if (!gridSlot.occupied) {
      break;
    }
  } while (true);

  gridItems[i].style.gridRow = gridSlot.getRowFormatted();
  gridSlot.occupied = true;
}
