var numberElement = document.querySelector(".minus_text");

var plusButton = document.querySelector(".button_plus");

var minusButton = document.querySelector(".minus_button");

var currentNumber = 1;

plusButton.addEventListener("click", function() {
    currentNumber++;
    numberElement.textContent = currentNumber;
  });

  minusButton.addEventListener("click", function() {
    currentNumber--;
    numberElement.textContent = currentNumber;
  });










