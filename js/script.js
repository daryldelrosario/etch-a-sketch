let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++) {
    let square = document.createElement("div");

    square.addEventListener("mouseover", function () {
        square.style.background = "yellow";
    });

    square.style.border = "1px solid black";
    square.style.background = "white";
    board.insertAdjacentElement("beforeend", square);
}