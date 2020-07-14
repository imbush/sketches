//Written by Inle Bush
let radius, centerX, centerY, coeff;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    colorMode(HSL, 360)

    radius = height / 2 - 10;
    centerX = height / 2;
    centerY = width / 2;
}

function endPt(n, y) {
    return n * y;
}

function draw() {
    background(0)
    noFill();
    circle(centerX, centerY, 2 * radius);

    x = mouseX;
    y = mouseY;

    n = max(30, floor(x * 300 / width)); //number of lines
    coeff = max(1, y * 10 / height);
    stroke(360);
    text(n, 10, 15);
    text(coeff, 10, 25)

    translate(centerX, centerY);
    strokeWeight(1);
    for (i = 0; i < n; i++) {
        ang = i * 360 / n
        stroke(ang, 360, 200)
        startX = radius * cos(ang)
        startY = radius * sin(ang)
        newI = endPt(i + 1, coeff) % n
        newAng = (newI - 1) * 360 / n
        endX = radius * cos(newAng)
        endY = radius * sin(newAng)
        line(startX, startY, endX, endY)
    }
}