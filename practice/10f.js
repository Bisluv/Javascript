function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    
    turnOffPreviousBUtton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}
function turnOffPreviousBUtton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}