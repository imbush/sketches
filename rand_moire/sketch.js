let height = 500;
let width = 500;
let n = 5000;
let a = 0.9;
let points = [];

function setup() {
    createCanvas(width, height);
    background(255);
    stroke(0);
    strokeWeight(3);
    angleMode(DEGREES);

    for(let i = 0; i < n; i++) {
        ptX = random(-width/2, width/2);
        ptY = random(-height/2, height/2);
        points[i] = [ptX, ptY, ptX * 255 / width, ptY * 255 / height];
    }
};

function draw() {
    translate(width/2, height/2)
    background(255, 255, 255, 220);
    
    for(let i = 0; i < n; i++) {
        stroke(points[i][2], points[i][3], 102)
        point(points[i][0], points[i][1]);
    }

    a = atan2(mouseY, mouseX);
    rotate(a);
    for(let i = 0; i < n; i++) {
        stroke(points[i][2], points[i][3], 102)
        point(points[i][0], points[i][1]);
    }
}
