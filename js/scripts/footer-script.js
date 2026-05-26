export function runFooterScript() {
  // Sets the copyright notice to the current year.
  let date = new Date();
  let copyrightNotice = document.getElementById("copyright-notice");
  // Using innerHTML here to get &copy; to work, and not be treated as a string literal as it would be if I used innerText.
  copyrightNotice.innerHTML = `&copy; Athanasios Topaltsis, ${date.getFullYear()}`;
}
