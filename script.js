let container = document.getElementById('container');

// initialization on default board size and starting drawing ability
let divisions = 480;
let noOfSquares = 64;
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
    noOfSquares = prompt("How many pixels on each side of your square canvas? (1-100)", "64");
    // console.log(noOfSquares);
    if (noOfSquares === null) 
        return;
    else if (noOfSquares === '') {
        alert('Enter a valid number!');
        resetBoard();
    } else if (noOfSquares.includes('.')) {
        alert("Don't use decimals!");
        resetBoard();
    } else {
    // console.log(noOfSquares);
    noOfSquares = parseInt(noOfSquares);
    // console.log(noOfSquares);
    if (isNaN(noOfSquares)) {
        alert('Enter a valid number!');
        resetBoard();
    } else if (noOfSquares >100 || noOfSquares <1) {
        alert("Enter a valid number.");
        resetBoard();
    } else {
    clearBoard();
    squareWidth = divisions/noOfSquares;
    createBoard(noOfSquares, squareWidth);
    canvasHover();
    }
    }
}






