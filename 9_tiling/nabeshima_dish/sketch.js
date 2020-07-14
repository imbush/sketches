// global variables below
let radius, branchWidth;
let tileXNum = 5;//tiles along the width
let root3 = 3 ** 0.5; // for efficiency and readability

function setup() {
    createCanvas(500, 500);
    radius = width / (tileXNum * root3);
    strokeWeight(0);
    stroke(11, 23, 71);
    angleMode(DEGREES);
}

function draw() {
    background(200);
    branchWidth = mouseX / width * radius * 2;
    let colors = [[240, 85, 50], [90, 145, 35], [43, 117, 196]];

    for (let y = 0; y <= height * 2 / radius + radius; y ++) {
        for (let x = 0; x <= width / radius + radius; x ++) {
            centerY = y * radius/2;
            centerX = (x + (y % 2) / 2) * radius * root3;
            fill(colors[y % 3][0], colors[y % 3][1], colors[y % 3][2]);
            polyShape(centerX, centerY);
        }
    }
}

function mouseClicked() {
    save("dish_pattern.jpg");
}

function polyShape(centerX, centerY) {
    push();
    translate(centerX, centerY);
    rotate(-90);
    beginShape();
    secondX = radius - branchWidth * (1 / root3 + 1 / (2 * root3)); // radius to secondary points
    secondY = branchWidth / 2;
    for (let angle = 0; angle < 360; angle += 120) {
        vertex(secondX * cos(angle) + secondY * sin(angle), secondX * sin(angle) - secondY * cos(angle)); // rotational matrix
        vertex((radius - branchWidth / root3) * cos(angle), (radius - branchWidth / root3) * sin(angle));
        vertex(secondX * cos(angle) - secondY * sin(angle), secondX * sin(angle) + secondY * cos(angle)); // rotational matrix
        vertex(branchWidth / root3 * cos(angle + 60), branchWidth / root3 * sin(angle + 60));
    }
    endShape(CLOSE);

    pop();
}