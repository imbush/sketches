// global variables below
let inner, tileWidth, tileHeight;
let radius = 50;

function setup() {
    createCanvas(1000, 1000);
    // additional setup
    strokeWeight(2);
    stroke(255);
    noFill();
    angleMode(DEGREES);
    mouseClicked();
}

function mouseClicked() {
    background(random(80, 180), random(60, 100), 100);
    
    for (let y = 0; y <= height / radius + 10; y ++) {
        for (let x = 0; x <= width / (3 * radius); x ++) {
            centY = (y + 0) * radius / 2 * (3 ** 0.5);
            centX = x * 3 * radius + radius * ((y+ 1) % 2) * 1.5;
            hexGotoTen(centX, centY, random(5, max(5, (height - centY) / 35)));
        }
    }
}

function hexGotoTen(centerX, centerY, n) {
    if (random() < 0.5) {
        arc(centerX + radius, centerY, radius, radius, 120, 240);
        arc(centerX + radius * cos(120), centerY + radius * sin(120), radius, radius, 240, 360);
        arc(centerX + radius * cos(240), centerY + radius * sin(240), radius, radius, 0, 120);
    } else {
        arc(centerX + radius * cos(60), centerY + radius * sin(60), radius, radius, 180, 300);
        arc(centerX + radius * cos(180), centerY + radius * sin(180), radius, radius, 300, 60);
        arc(centerX + radius * cos(300), centerY + radius * sin(300), radius, radius, 60, 180);
    }
}