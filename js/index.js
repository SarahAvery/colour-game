import "../resources/scss/main";

const colorTitle = document.getElementById("color");
const resetBtn = document.getElementById("reset");
const numSquares = 6;
let colors = [];
const squares = document.querySelectorAll(".square");
const message = document.getElementById("message");
var pickedColor;
const containerColor = document.getElementById("container");

init();

function init() {
  colorTitle.innerHTML = makeColor();
  setupSquares();
  resetGame();
}

// Reset Button
resetBtn.addEventListener("click", function () {
  resetGame();
});

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        resetBtn.textContent = "Play Again?";
        changeColors(pickedColor);
        for (var i = 0; i < squares.length; i++) {
          squares[i].style.border = "none";
        }
        containerColor.style.backgroundColor = pickedColor;
        containerColor.style.border = "1px solid black";
      } else {
        this.style.backgroundColor = containerColor.style.backgroundColor;
        this.style.border = "none";
        message.textContent = "Pick Again";
      }
    });
  }
}

function resetGame() {
  colors = genRandomColors(numSquares);
  pickedColor = chooseColor();
  colorTitle.textContent = pickedColor;
  containerColor.style.backgroundColor = "rgb(245, 227, 227)";
  containerColor.style.border = "none";
  resetBtn.textContent = "New Colours";
  message.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.border = "1px solid black";
    } else {
      squares[i].style.border = "none";
    }
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function chooseColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function genRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
}

function makeColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
