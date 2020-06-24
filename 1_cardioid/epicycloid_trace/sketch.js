//Written by Inle Bush
let height = 1000;
let width = 1000;
let ratio = 1; //Outer to innner radius
let radOut = 150 / (ratio + 1);
let radIn = radOut * ratio;
let n = 0;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    background(20, 10, 30);
    stroke(240, 240, 255, 20);
    strokeWeight(4);
    noFill();
    frameRate(120);
}


function draw() {
    // background(0);
    n += 0.5;
    push();
    translate(width / 2, height / 2);
    // strokeWeight(random(0, 5))
    let radOut = width * 5 / 12 / (ratio + 2);
    let radIn = radOut * ratio;
    for (let ang = 0; ang <= 360; ang += 360/n) {
        stroke(random(200, 210), random(120, 220), 255, 1)
        let ptX = (radOut + radIn) * cos(ang) - radOut * cos((ratio + 1) * ang);
        let ptY = (radOut + radIn) * sin(ang) - radOut * sin((ratio + 1) * ang);
        strokeWeight(250/11 * 140/n - 250/11 * 140/n * (abs(180 - ang) / 180))
        point(ptX, ptY);
    }
    pop();
}

function mouseClicked() {
    save("neon_cardioid.jpg");
}