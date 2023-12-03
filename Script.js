let globalNum = 0.0;
let globalAction = "none";
let darkModeToggle = false;


function inputNumber(num) {
  element = document.getElementById("screenNum");
  if (globalAction === "=") {
    element.innerHTML = "";
  }
  element.innerHTML += num;
}

function backspace() {
  document.getElementById("screenNum").innerHTML = document
    .getElementById("screenNum")
    .innerHTML.slice(0, -1);
}

function addNumber(action) {
  element = document.getElementById("screenNum");
  if (globalNum == 0.0) {
    globalNum = parseFloat(element.innerHTML);
    element.innerHTML = "";
    globalAction = action;
  }
}

function equal() {
  element = document.getElementById("screenNum");
  switch (globalAction) {
    case "+":
      element.innerHTML = globalNum + parseFloat(element.innerHTML);
      break;
    case "-":
      element.innerHTML = globalNum - parseFloat(element.innerHTML);
      break;
    case "*":
      element.innerHTML = globalNum * parseFloat(element.innerHTML);
      break;
    case "/":
      element.innerHTML = globalNum / parseFloat(element.innerHTML);
      break;
  }
  globalNum = 0.0;
  globalAction = "=";
}

function darkMode() {
  let root = document.documentElement;

  if (darkModeToggle == false) {
    root.style.setProperty("--primary-color", "#ede8e6");
    root.style.setProperty("--background-color", "#242424");

    const elements = document.querySelectorAll(".light-mode");
    const calculator = document.querySelectorAll(".calculator-light-mode");

    elements.forEach((element) => {
      element.classList.replace("light-mode", "dark-mode");
    });

    calculator.forEach((element) => {
      element.classList.replace(
        "calculator-light-mode",
        "calculator-dark-mode"
      );
    });
    darkModeToggle = true;
  } else {
    root.style.setProperty("--primary-color", "#353436");
    root.style.setProperty("--background-color", "#f9fbfa");

    const elements = document.querySelectorAll(".dark-mode");
    const calculator = document.querySelectorAll(".calculator-dark-mode");

    elements.forEach((element) => {
      element.classList.replace("dark-mode", "light-mode");
    });

    calculator.forEach((element) => {
      element.classList.replace(
        "calculator-dark-mode",
        "calculator-light-mode"
      );
    });
    darkModeToggle = false;
  }
}
