let container = document.getElementById('container');


let divisions = container.clientWidth;
let squareWidth16 = divisions/16;


let noOfSquares = 16;
createBoard();

function createBoard() {
    for (let i=0; i<noOfSquares; i++) {
        for (let j=0; j < noOfSquares; j++) {
            let drawingBrdSq = document.createElement('div');
            drawingBrdSq.className = "drawing-squares"
        drawingBrdSq.style.boxSizing = "border-box";
            drawingBrdSq.style.border = 'solid 1px black';
            drawingBrdSq.style.width = `${squareWidth16}px`;
            drawingBrdSq.style.height = `${squareWidth16}px`;
            drawingBrdSq.style.padding = '0';
            drawingBrdSq.style.margin = '0';
            container.appendChild(drawingBrdSq);
        }
    }
}

let drawingBrdSq = document.getElementsByClassName('drawing-squares');
for (let i =0; i < drawingBrdSq.length; i++) {
    drawingBrdSq[i].addEventListener("mouseenter", colorSq, {once:true});
}

function colorSq(e) {
    e.target.className = `${e.target.className} hovering`;
}

let clrBtn = document.getElementById('clear-button');
clrBtn.addEventListener('click', clearBoard);

function clearBoard() {
    console.log(drawingBrdSq.length)
    while (drawingBrdSq.length >0) drawingBrdSq[0].remove();
}



