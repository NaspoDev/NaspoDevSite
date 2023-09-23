// Animated svg blob class

const blobClass = "blob"; // Class of blob svgs
export let blobs = []; // List of blob objects

// Blob object class
class Blob {
  constructor(element, pathId1, pathId2) {
    this.element = element;
    this.pathId1 = pathId1;
    this.pathId2 = pathId2;
    this.animateBlob();
  }
  // animates using KUTE.js library
  animateBlob() {
    const tween = KUTE.fromTo(
      `#${this.pathId1}`,
      { path: `#${this.pathId1}` },
      { path: `#${this.pathId2}` },
      { repeat: 999, duration: 3000, yoyo: true }
    );

    tween.start();
  }
}

let blobElements = document.querySelectorAll(`.${blobClass}`);

export function initializeBlobs() {
  for (const blob of blobElements) {
    // get the path elements of the blob svg (should be 2)
    let pathElements = blob.querySelectorAll("path");

    // check that there are 2 path elements
    if (!pathElements.length == 2) {
      console.error(
        `Too many or too few path elements in ${blob} svg! Animation will not work.`
      );
    } else {
      // check that both path elements have an id
      for (const pathElement of pathElements) {
        if (!pathElement.id) {
          console.error(
            `Path element ${pathElement} must have an id for blob animation!`
          );
        }
      }

      // initialize the blob object
      blobs.push(new Blob(blob, pathElements[0].id, pathElements[1].id));
    }
  }
}
