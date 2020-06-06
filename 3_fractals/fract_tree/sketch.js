//Written by Inle Bush
let height = 700;
let width = 700;
let centerX = width/2;
let centerY = height/2;
let layerLimit = 7;
let lengthRatio = 0.7;
let startLength = (1 - lengthRatio) * (centerY);
let branchFactor = 3;
let offset = 20;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    strokeWeight(1);
    stroke('white');
    colorMode(HSL, 360);
}

function branch(startX, startY, startAng, layer, length) {
    if (layer >= layerLimit) {
        return;
    }
    for (let i = 0; i < branchFactor; i++) {
        stroke((layer - 1) * 18, 360, 200);
        strokeWeight(5 * 0.7**layer);
        newAng = startAng + (i - (branchFactor - 1)/2) * angle - offset;
        endX = startX + length * cos(newAng);
        endY = startY + length * sin(newAng);
        line(startX, startY, endX, endY);
        branch(endX, endY, newAng, layer + 1, length * lengthRatio);
    }   
}

function mouseClicked() {
    branchFactor = (branchFactor - 1) % 4 + 2;
    if (branchFactor == 2) {
        layerLimit = 10;
    } else if (branchFactor == 3) {
        layerLimit = 9;
    } else {
        layerLimit = 7;
    }
}

function draw() {
    angle = mouseY * 360 / branchFactor / width;
    offset = centerX * 100 / width - mouseX * 100 / width;
    translate(centerX, centerY);
    rotate(-90);
    background(0);
    branch(0, 0, 0, 1, startLength);
}