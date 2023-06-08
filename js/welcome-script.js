const elements = [
  { id: "welcome-span", text: "Hey there" },
  { id: "welcome-h2", text: ", I'm" },
  { id: "welcome-h1", text: "Naspo" },
];

let index = 0;
let speed = 100;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

async function runAnimations() {
  for (element of elements) {
    await typeWritterEffect(element.id, element.text);
  }
}

runAnimations();
