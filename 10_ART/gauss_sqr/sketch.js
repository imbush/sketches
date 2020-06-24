//Written by Inle Bush
let height = 1000;
let width = 1000;
let n = 100000;
let side = 30;

function setup() {
    createCanvas(height, width);
    noStroke();
    mouseClicked();
}

function mouseClicked() {
    background(0);
    for (let i = 0; i < n; i++) {
        fill(random(80, 180), random(60, 100), 100);
        push();
        ptX = randomGaussian(width/2, width / 5);
        ptY = randomGaussian(height/2, height / 5);
        translate(ptX, ptY);
        rotate(randomGaussian(0, 0.08));
        rect(0, 0, side - abs(width/2 - ptX) * side / (width / 2) + random(0, side - abs(width/2 - ptX) * side / (width / 2)), side - abs(width/2 - ptY) * side / (height / 2) + random(0, side - abs(width/2 - ptY) * side / (height / 2)));
        pop();
    }
}