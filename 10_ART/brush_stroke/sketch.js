// global variables below
let inner;

function draw() {
    // drawing setup
}


function setup() {
    inner = document.getElementById('P5Canvas').getBoundingClientRect();
    let canvas = createCanvas(inner.width, inner.height);
    canvas.parent('P5Canvas');
    document.getElementById('clearButton').onclick = function() {clearCanvas()}
    document.getElementById('saveButton').onclick = function() {
        saveCanvas('myCanvas', 'png')
    }
    // additional setup below
}


function clearCanvas() {
    let inner = document.getElementById('P5Canvas').getBoundingClientRect();
    clear();
    resizeCanvas(inner.width, inner.height);
}