globalNum = 0.0;
globalAction = "none";

function inputNumber(num) {
  element = document.getElementById("screenNum");
  if (globalAction == "=") {
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
