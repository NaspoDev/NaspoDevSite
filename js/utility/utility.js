// Utility Module

const hiddenClass = "hidden";

export function showElement(element) {
  if (element.classList.contains(hiddenClass)) {
    element.classList.remove(hiddenClass);
  }
}

export function hideElement(element) {
  if (!element.classList.contains(hiddenClass)) {
    element.classList.add(hiddenClass);
  }
}

// Delay the execution of the thread by "ms" milliseconds
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
