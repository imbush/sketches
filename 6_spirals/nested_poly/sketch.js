let height = 500;
let width = 500;
let n = 7; //sides
let a = 180 * (n - 2) / n; //interior angle of regular polygon
let rot = 10;
let limit = 2000;
let mode = 0;

function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
    background(255);
};

function mouseClicked() {
    mode = (mode + 1) % 2
};

function draw() {
    translate(width/2, height/2);
    background(255);
    rotate(360 / n / 2);
    let rad = width * 2/5;
    rot = min(width, max(10, mouseX)) * (360 / n / 2) / width;

    for (let i = 0; i < limit; i ++) {
        
        if (mode == 0) {
            beginShape();
            fill((i % 2) * 220, 100, 100);
            noStroke();
            for (let i = 0; i < n; i++) {
                vertex(rad * cos(i * 360 / n), rad * sin(i * 360/n))
            }
            endShape(CLOSE);
        } else {
            limit = 1000
            noFill();
            stroke(0);
            strokeWeight(3);
            for (let i = 0; i < n; i++) {
                point(rad * cos(i * 360 / n), rad * sin(i * 360/n))
            }
        };

        rad *= sin(a / 2) / cos(90 - a / 2 - rot);
        rotate(rot);
    }

    area = 0.25 * n * tan(180 / n) * (1 - (cos(180 / n) / cos(180 / n - rot)) ** 2); // area of outer poly w/side 1
    area = area / (1 - (cos(180 / n) / cos(180 / n - rot)) ** 4);

    resetMatrix();
    fill(0);
    noStroke();
    text(`Angle of Rotation= ${rot};\nArea of black = ${area}`, width / 20, height * 3 / 50);
}