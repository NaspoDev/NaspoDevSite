function typingEffect(elementId) {
  let text = document.getElementById(elementId).text;
  let index = 0;

  setInterval(() => {
    if (index === text.length()) clearInterval();
    document.getElementById(elementId).innerHTML += text.charAt(index);
  }, 500);
}
