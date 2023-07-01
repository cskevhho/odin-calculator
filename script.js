let resDisplay = document.getElementById("display");
resDisplay.textContent = "0";

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if (resDisplay.textContent == "0" && btn.id != "0" && btn.id != "clear") {
    //   resDisplay.textContent = "";
    //   resDisplay.textContent += btn.id;
    // } else if (btn.id == "clear") {
    //   resDisplay.textContent = "0";
    // } else if (btn.id == '.') {
    //     if (resDisplay.textContent.indexOf('.') < 0) {
    //               resDisplay.textContent += btn.id;
    //     }
    // }

    // else {
    //   resDisplay.textContent += btn.id;
    // }
    //   });
    /* ABOVE IS THE ORIGINAL, GO BACK IF YOU GOOFED PLEASE I BEG YOU */

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
  });
});

const firstNum = Number(resDisplay.textContent);

// function add(){}

// function subtract(){}

// function multiply(){}

// function divide(){}

// function operate(){}
