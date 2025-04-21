// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      display.textContent = "0";
    } else if (button.id === "equals") {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch (err) {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
