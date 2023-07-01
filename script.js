let resDisplay = document.getElementById("display");
resDisplay.textContent = "0";
let firstNum, secondNum;

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id == "delete" && resDisplay.textContent.length > 0) {
      resDisplay.textContent = resDisplay.textContent.slice(
        0,
        resDisplay.textContent.length - 1
      );
      if (resDisplay.textContent == "") {
        resDisplay.textContent = "0";
      }
    }
    if (btn.id == "clear") {
      resDisplay.textContent = "0";
    }
    if (btn.className != "operation" && btn.id != "delete" && btn.id != ".") {
      if (resDisplay.textContent == "0") {
        resDisplay.textContent = "";
      }
      if (resDisplay.textContent.length != 12) {
        resDisplay.textContent += btn.id;
      }
    }
    if (btn.id == "." && resDisplay.textContent.indexOf(".") < 0) {
      resDisplay.textContent += btn.id;
    }

    if (btn.className == "operation" && btn.id != 'delete') {
     secondNum;
      if (firstNum == undefined) {
        firstNum = Number(resDisplay.textContent);
      } else if (typeof firstNum == "number" && secondNum == undefined) {
        secondNum = Number(resDisplay.textContent);
      }
      const opChoice = btn.id;

      console.log(firstNum);
      console.log(secondNum);
      console.log(opChoice);
      if (firstNum != undefined && secondNum != undefined)
        switch (btn.id) {
          case "+":
            operate();
            break;
          case "-":
            operate();
            break;
          case "/":
            operate();
            break;
          case "*":
            operate();
            break;
          case "%":
            operate();
            break;
          case "equals":
            operate();
            break;
        }
    }
  });
});

function operate(numOne, currOp, numTwo) {}
