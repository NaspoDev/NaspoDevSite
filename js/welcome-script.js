// Runs opening animations on the home screen page. (Typewriter effect)

const elements = [
  { id: "welcome-animation-span", text: "Hey there" },
  { id: "welcome-animation-h2", text: ", I'm" },
  { id: "welcome-animation-h1", text: "Naspo" },
];

let index = 0;
const speed = 80;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function to type out text in a typewriter effect.
async function typeWritterEffect(id, text) {
  if (index < text.length) {
    document.getElementById(id).innerHTML += text.charAt(index);
    index++;
    await delay(speed);
    await typeWritterEffect(id, text);
  } else {
    index = 0;
  }
}

// async function to run calls to typeWritterEffect for each element.
async function runAnimations() {
  for (element of elements) {
    // If the element if the h2, add an extra delay after tpying the comma.
    if (element.text === ", I'm") {
      await typeWritterEffect(element.id, element.text.charAt(0));
      await delay(90);
      await typeWritterEffect(element.id, element.text.substring(1));
    } else {
      await typeWritterEffect(element.id, element.text);
    }
  }
}

runAnimations();
