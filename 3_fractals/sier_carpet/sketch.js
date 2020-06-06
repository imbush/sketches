//Written by Inle Bush
let height = 729;
let width = 729;
let layer = 1;

function setup() {
    createCanvas(height, width);
    background(0);
    angleMode(DEGREES);
    fill(255);
    noStroke();
}

function newLevel(x, y, side, level) {
    square(x, y, side);
    
    if (level >= layer) {
        return;
    }

    var nextSide = side/3;
    for (let newX = 0; newX < 3; newX++) {
        for (let newY = 0; newY < 3; newY++) {
            newLevel(x + (newX - 1) * side + nextSide, y + (newY - 1) * side + nextSide, nextSide, level + 1)
        }
    }
}

function mouseClicked() {
    newLevel(height/3, height/3, height/3, 1)
    layer = (layer + 1) % 7;
    if (layer == 1) {
        background(0)
    }
}