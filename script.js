let resDisplay = document.querySelector(".display");
resDisplay.textContent = "0";
let firstNum, secondNum, currentOp, shouldReset;

const numBtns = Array.from(document.getElementsByClassName("numeric"));
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    if (resDisplay.textContent == "0" || shouldReset) {
      resDisplay.textContent = "";
      shouldReset = false;
    }
    resDisplay.textContent += numBtn.dataset.value;
  });
});

const opBtns = Array.from(document.getElementsByClassName("operation"));
opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    if (firstNum == undefined) {
      firstNum = Number(resDisplay.textContent);
      currentOp = opBtn.dataset.value;
      resDisplay.textContent = "0";
    } else if (firstNum !== undefined && secondNum == undefined) {
      secondNum = Number(resDisplay.textContent);
      firstNum = operate(firstNum, currentOp, secondNum); // Perform the previous operation and update firstNum
      currentOp = opBtn.dataset.value;
      resDisplay.textContent = firstNum; // Update the display with the intermediate sum
      secondNum = undefined;
      shouldReset = true;
    }
  });
});

const equalsBtn = document.querySelector("[data-value='equals']");
equalsBtn.addEventListener("click", () => {
  if (firstNum !== undefined && currentOp !== undefined) {
    secondNum = Number(resDisplay.textContent);
    firstNum = operate(firstNum, currentOp, secondNum); // Perform the operation and update firstNum
    currentOp = undefined;
    secondNum = undefined;
    resDisplay.textContent = firstNum; // Update the display with the final result
  }
});

function clearNum() {
  resDisplay.textContent = "0";
  firstNum = undefined;
  secondNum = undefined;
  currentOp = undefined;
  shouldReset = false;
}

function backNum() {
  if (resDisplay.textContent.length == 1 && resDisplay.textContent != "0") {
    resDisplay.textContent = "0";
  } else if (resDisplay.textContent.length > 1) {
    resDisplay.textContent = resDisplay.textContent.slice(0, -1);
  }
}

function addDecimal() {
  if (resDisplay.textContent.indexOf(".") < 0) {
    resDisplay.textContent += ".";
  }
}

function operate(numOne, currOp, numTwo) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  switch (currOp) {
    case "%":
      return numOne / 100;
    case "/":
      return numOne / numTwo;
    case "*":
      return numOne * numTwo;
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
  }
}
