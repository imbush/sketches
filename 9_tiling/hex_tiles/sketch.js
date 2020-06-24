// global variables below
let inner, tileWidth, tileHeight;
let radius = 100; 
let tiles = 1;//tiles per side
let height = 100 * radius / 2 * 3 ** 0.5 * tiles;
let width = 30 * radius * tiles;
while(width > height) {
    width -= radius
}


function mouseClicked() {
    background(random(80, 180), random(60, 100), 100);
    // background(240, 245, 255);
    
    for (let y = 0; y <= height / radius + 10; y ++) {
        for (let x = 0; x <= width / (3 * radius); x ++) {
            centY = (y + 0) * radius / 2 * (3 ** 0.5);
            centX = x * 3 * radius + radius * ((y+ 1) % 2) * 1.5;
            if (centY <= random(300, height + 100)) {
                makeRect(centX, centY, random(5, max(5, (height - centY) / 35)));
            }
        }
    }
    save("polygonalrain.jpg");
}

function makeRect(centerX, centerY, n) {
    for (let i = 0; i < n; i++) {
        thisRadius = random(0, radius);
        // stroke(0, random(80, 120), random(100, 255));
        fill(random(80, 180), random(60, 100), 100);
        beginShape();
        for (let angle = 0; angle < 360; angle += 60) {
                currentRadius = max(0, min(radius, randomGaussian(thisRadius, radius / 20)));
                vertex(centerX + currentRadius * cos(angle), centerY + currentRadius * sin(angle));
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
    stroke(35, 17, 10, 255);
    noFill();
    noStroke();
    angleMode(DEGREES);
    mouseClicked();
}


function clearCanvas() {
    let inner = document.getElementById('P5Canvas').getBoundingClientRect();
    clear();
}