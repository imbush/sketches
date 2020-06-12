//Written by Inle Bush
let height = 400;
let width = 400;
let radius = 40;
let centerX = width/2;
let centerY = height/2;
let increment = 0.05;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    strokeWeight(2);
}

function f(x) {
    x -= (mouseX - centerX)/radius;
    return x**2 - (mouseY - centerY)/radius;
}

function draw() {
    background(255);
    translate(centerX, centerY);
    noFill();

    circle(0, 0, 2*radius);
    line(-width, 0, width, 0);
    line(0, -height, 0, height);

    for (let x = -width; x < width; x += increment) {
        ptX = radius * x;
        ptY = radius * f(x);
        point(ptX, - ptY);
        ang = atan2(ptX, ptY)
        mag = radius ** 2/(ptX ** 2 + ptY ** 2) ** 0.5;
        stroke('blue')
        point(mag * sin(ang), - mag * cos(ang));
        stroke(0);
    }
}