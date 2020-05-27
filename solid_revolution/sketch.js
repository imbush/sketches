//Written by Inle Bush
let height = 800;
let width = 800;
let unit = 40;
let centerX = width/2;
let centerY = height/2;
let increment = 0.05;
let a = 0;
let b = 2* 3.1415926535;
let ang = 0.3;

function setup() {
    createCanvas(height, width);
    strokeWeight(2);
}

function f(x, mX, mY) {
    x -= (mX - centerX) / unit
    return sin(x) - (mY - centerY)/ unit
}

function draw() {
    background(255);
    translate(centerX, centerY);
    noFill();

    line(-width, 0, width, 0);
    line(0, -height, 0, height);

    mX = mouseX;
    mY = mouseY;

    fill(0,0,200);
    stroke('blue')
    volume = 0;
    for (let x = a; x < b; x += increment) {
        h = 2 * unit * f(x, mX, mY)
        ellipse(unit * x, 0, ang * h, h)
        volume += PI * (h / 2 / unit) ** 2;
    }
    volume *= increment;

    stroke('black');
    for (let x = -width; x < width; x += increment) {
        ptX = unit * x;
        ptY = unit * f(x, mX, mY);
        point(ptX, - ptY);
    }
    strokeWeight(1);
    text(`f(x) = sin(x - ${(centerX - mX) / unit}) + ${ - (mY - centerY)/ unit} \n a,b = ${a}, ${b}\nvolume ≈ ${volume}`, -centerX + 10, -centerY + 10)
    strokeWeight(2);
}