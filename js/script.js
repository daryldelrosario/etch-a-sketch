// Startup Default Variables
const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;
let board = document.querySelector(".board");
let footer = document.querySelector(".footer-content");

// Dynamically creates size of board inside div.board
function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < (size * size); i++) {
    const square = document.createElement("div");
    square.classList.add("square-element");
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    board.appendChild(square);
  }
}

// Triggered via HTML onclick button `Select Size`
function setSize() {
  const size = prompt("Choose a size between 2 and 99: ");

  if(size >=2 && size <= 99) {
    board.textContent = "";
    createBoard(size);
  } else if(size < 2 || size > 99) {
    alert("Please try again");
    setSize();
  } else {
    alert("Please try again");
    setSize();
  }
}

// Set up for modified hover pen function
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "black";
}

// Footer content
const year = new Date().getFullYear();
footer.textContent = '\u00A9'

// Setup board when window loads
window.onload = () => {
  createBoard(currentSize);
}