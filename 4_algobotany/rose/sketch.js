let width = 500;
let height = 500;
let points = [];
let radius = 200;
let k = 1;

function setup() {
    createCanvas(width, height);
    noFill();
    angleMode(DEGREES);
    background(0);
    stroke(255);
};

function mouseClicked() {
    background(0);
    push();
    translate(width/2, height/2);
    for (angle = 0; angle < 360; angle += 0.1){
        for(let rad = radius; rad <= radius; rad += 20) {
            stroke(rad);
            point(rad * cos(k * angle) * cos(angle), rad * cos(k * angle) * sin(angle));
        }
    }
    pop();
    k += 0.1;
}