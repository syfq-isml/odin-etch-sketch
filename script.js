let container = document.getElementById('container');

// initialization on default board size and starting drawing ability
let divisions = 480;
let noOfSquares = 48;
let squareWidth = divisions/noOfSquares;
createBoard(noOfSquares, squareWidth);
canvasHover();

function createBoard(noOfSquares, squareWidth) {
    for (let i=0; i<noOfSquares; i++) {
        for (let j=0; j < noOfSquares; j++) {
            let drawingBrdSq = document.createElement('div');
            drawingBrdSq.className = "drawing-squares"
        drawingBrdSq.style.boxSizing = "border-box";
            // drawingBrdSq.style.border = 'solid 1px black';
            drawingBrdSq.style.width = `${squareWidth}px`;
            drawingBrdSq.style.height = `${squareWidth}px`;
            drawingBrdSq.style.padding = '0';
            drawingBrdSq.style.margin = '0';
            container.appendChild(drawingBrdSq);
        }
    }
}

function canvasHover() {
    let drawingBrdSq = document.getElementsByClassName('drawing-squares');
        for (let i =0; i < drawingBrdSq.length; i++) {
            drawingBrdSq[i].addEventListener("click", initiateDraw);
        }
}

function initiateDraw() {
    let drawingBrdSq = document.getElementsByClassName('drawing-squares');
    for (let i =0; i < drawingBrdSq.length; i++) {
        drawingBrdSq[i].addEventListener("mouseenter", colorSq, {once:true});
    }
}

function colorSq(e) {
    e.target.className = `${e.target.className} hovering`;
}

let clrBtn = document.getElementById('clear-button');
clrBtn.addEventListener('click', resetBoard);

function clearBoard() {
    let drawingBrdSq = document.getElementsByClassName('drawing-squares');
    while (drawingBrdSq.length >0) drawingBrdSq[0].remove();
}

function resetBoard() {
    clearBoard();
    noOfSquares = prompt("How many pixels per side for your square canvas? (1-100)", "48");

    while (noOfSquares>100 || noOfSquares<1 || noOfSquares === '') {
        alert("Try a different number!");
        noOfSquares = prompt("How many squares?", "48");
    }

    squareWidth = divisions/noOfSquares;
    createBoard(noOfSquares, squareWidth);
    canvasHover();
}



