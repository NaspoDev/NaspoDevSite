// Animated svg blob class

// List of blob objects
let blobs = [];

class Blob {
  constructor(frame1PathId, frame2PathId) {
    this.frame1Id = frame1Id;
    this.frame2Id = frame2Id;
  }
  animateBlob() {
    const tween = KUTE.fromTo(
      this.frame1Id,
      { path: this.frame1Id },
      { path: this.frame2Id },
      { repeat: 999, duration: 500, yoyo: true }
    );

    tween.start();
  }
}

let blobsElements = document.querySelectorAll(".blob");

export function initializeBlobs() {
  console.log(typeof blobsElements[0]);
  // for (const blob in blobsElements) {
  //   let pathElements = blob.querySelectorAll("path");
  //   if (pathElements.length == 2) {
  //     blobs.push(new Blob(pathElements[0].id, pathElements[1].id));
  //   }
  // }
}
