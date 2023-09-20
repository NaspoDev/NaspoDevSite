// Runs opening animations on the home screen page. (Typewriter effect)

// elements involved in the animation. id is the id of the element, text is the text to be typed out.
const printStatementComponents = [
  { id: "print-statement-print", text: "print" },
  { id: "print-statement-bracket-1", text: "(" },
  { id: "print-statement-text", text: '"Hey there, I\'m\\nNaspo"' },
  { id: "print-statement-bracket-2", text: ")" },
];

const welcomeTextSpans = document.querySelectorAll(".random-font");
const welcomeTextFonts = [
  "bonbon",
  "carrinady",
  "fantaisieartistique",
  "potra",
  "press-start",
  "spastic_nerfbag",
];

const maxAnimationDelay = 15; // max animation delay for welcome text (in seconds)

const cursor = document.getElementById("cursor");

let index = 0;
const speed = 100;

export function run() {
  runAnimations();
}

// Delay the execution of the thread by "ms" milliseconds
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

// Displays each character of welcome-text with a random font and random animation delay.
function displayWelcomeText() {
  for (const span of welcomeTextSpans) {
    span.style.fontFamily =
      welcomeTextFonts[Math.round(Math.random() * welcomeTextFonts.length)];
    span.style.opacity = 1;
    span.style.animation = `welcome-script-fadein ${
      Math.random() * maxAnimationDelay
    }s`;
  }
}

// async function to run calls to typeWriterEffect for each element.
async function runAnimations() {
  // run typewriter effect for printStatementComponents
  for (const element of printStatementComponents) {
    await typeWriterEffect(element.id, element.text);
  }

  // wait 2 seconds then remove the cursor
  await delay(2000);
  // TODO: add a loading animation thing
  cursor.remove();

  displayWelcomeText();
}
