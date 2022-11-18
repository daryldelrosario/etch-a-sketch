// Startup Default Variables
const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

let gridSize = document.querySelector("#grid-size");
let board = document.querySelector(".board");
let footer = document.querySelector(".footer-content");

// Clear board
function clearBoard() {
  board.textContent = "";
  createBoard(currentSize);
}

// Dynamically creates size of board inside div.board
function createBoard(size) {
  gridSize.textContent = `Current Grid Size: ${size} x ${size}`;

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < (size * size); i++) {
    const square = document.createElement("div");
    square.classList.add("square-element");
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    board.appendChild(square);
  }

  return size;
}

// Triggered via HTML onclick button `Select Size`
function setSize() {
  const size = prompt("Choose a size between 2 and 99: ");

  if(size >=2 && size <= 99) {
    currentSize = size;
    board.textContent = "";
    createBoard(size);
    return currentSize;
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
const copySymbol = "\u00A9";
const year = new Date().getFullYear();
footer.textContent = `Daryl del Rosario ${copySymbol} ${year} via The Odin Project`;

// Setup board when window loads
window.onload = () => {
  createBoard(currentSize);
}