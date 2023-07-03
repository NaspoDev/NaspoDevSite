// Runs opening animations on the home screen page. (Typewriter effect)

// elements involved in the animation. id is the id of the element, text is the text to be typed out.
const elements = [
  { id: "welcome-animation-span", text: "Hey there" },
  { id: "welcome-animation-h2", text: ", I'm" },
  { id: "welcome-animation-h1", text: "Naspo" },
];

let index;
const speed = 80;

export function run() {
  runAnimations();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function to type out text in a typewriter effect.
async function typeWriterEffect(id, text) {
  if (index < text.length) {
    document.getElementById(id).innerHTML += text.charAt(index);
    index++;
    await delay(speed);
    await typeWriterEffect(id, text);
  } else {
    index = 0;
  }
}

// async function to run calls to typeWriterEffect for each element.
async function runAnimations() {
  for (const element of elements) {
    // If the element is the h2, add an extra delay after typing the comma.
    if (element.text === ", I'm") {
      await typeWriterEffect(element.id, element.text.charAt(0));
      await delay(90);
      await typeWriterEffect(element.id, element.text.substring(1));
    } else {
      await typeWriterEffect(element.id, element.text);
    }
  }
}
