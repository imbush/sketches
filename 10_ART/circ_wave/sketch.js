let width = 500;
let height = 500;
let points = [];
let n = 50;
let rad = width/5;
function setup() {
    createCanvas(width, height);
    noFill();
    angleMode(DEGREES);
    background(0);
    stroke(0, 0, 255, 10);
    for (let i = 0; i < n; i++){
        points.push(rad);
    }
};

function draw() {
    push();
    translate(width/2, height/2);
    for(let i = 0; i < 1; i++) {
        stroke(0, 200, 255, 1);
        beginShape();
        for (let i = 0; i < n; i++) {
            curveVertex(points[i] * cos(i * 360 / n), points[i] * sin(i * 360 / n));
            points[i] = max(100, min(width/2, points[i] + random(-7, 8)));
        }
        endShape(CLOSE);

        // stroke(255, 0, 0, 50);
        // beginShape();
        // for (let i = 0; i < n; i++) {
        //     curveVertex(points[i] * cos(i * 360 / n), points[i] * sin(i * 360 / n));
        //     points[i] = max(100, min(width/2, points[i] + random(-20, 20)));
        // }
        // endShape(CLOSE);
    }
    pop();
}