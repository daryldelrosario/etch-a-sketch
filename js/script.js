let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

var mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};

for(let i = 0; i < 256; i++) {
    let square = document.createElement("div");

    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);

    square.style.border = "1px solid black";
    square.style.background = "white";
    board.insertAdjacentElement("beforeend", square);
}

function setSize() {
    prompt("Choose a size between 2 - 99:")
}

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "black";
}