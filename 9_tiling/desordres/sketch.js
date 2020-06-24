// global variables below
let inner, tileWidth, tileHeight;
let tiles = 10; //tiles per side
let width = 500;
let height = 500;


function mouseClicked() {
    
    background(random(80, 180), random(60, 100), 100)
    for (let y = 0; y <= height; y += tileHeight) {
        for (let x = 0; x <= width; x += tileWidth) {
            makeRect(x, y, tileWidth, tileHeight, random(10, 22));
        }
    }
}

function makeRect(leftX, topY, sideX, sideY, n) {
    let centerX = leftX + sideX / 2;
    let centerY = topY + sideY / 2;
    let maxRadius = ((sideX ** 2 + sideY ** 2) ** 0.5) / 2;
    let angle = atan(sideY/sideX);

    for (let i = 0; i < n; i++) {
        radius = random(0, maxRadius);
        fill(random(80, 180), random(60, 100), 100);
        beginShape();
        for (let j = 0; j <= 180; j += 180) {
            for (let sign = -1; sign < 2; sign += 2) {
                currentRadius = max(0, min(maxRadius, randomGaussian(radius, maxRadius / 20)));
                vertex(centerX + currentRadius * cos(j + sign * angle), centerY + currentRadius * sin(j + sign * angle));
            }
        }
        endShape(CLOSE);
    }
}

function setup() {
    inner = document.getElementById('P5Canvas').getBoundingClientRect();
    
    let canvas = createCanvas(width, height);
    canvas.parent('P5Canvas');
    document.getElementById('clearButton').onclick = function() {clearCanvas()}
    document.getElementById('saveButton').onclick = function() {
        saveCanvas('myCanvas', 'png');
    }
    // additional setup
    // stroke(35, 17, 10, 255);
    // noFill();
    noStroke();
    angleMode(DEGREES);
    
    tileWidth = width/tiles;
    tileHeight = height/tiles;
    mouseClicked();
}


function clearCanvas() {
    let inner = document.getElementById('P5Canvas').getBoundingClientRect();
    clear();
    tileWidth = width/tiles;
    tileHeight = height/tiles;
}