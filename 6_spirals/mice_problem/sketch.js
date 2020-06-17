let height = 500;
let width = 500;
let n = 4;
let radius = height/2 * 0.9;
let mice = [];
let newMice = [];

function setup() {
    createCanvas(width, height);
    background(0);
    angleMode(DEGREES);
    stroke(255);
    strokeJoin(ROUND)
    strokeWeight(3);
    colorMode(HSL, 360);
    noFill();

    translate(width/2, height/2);
    rotate(360 / n / 2 - 90);
    beginShape();
    for(let a = 0; a < 360; a += 360 / n) {
        vertex(radius * cos(a), radius * sin(a))
    }
    endShape(CLOSE);

    for(let a = 0; a < 360; a += 360 / n) {
        mice.push([radius * cos(a), radius * sin(a)]);
        newMice.push([null, null])
    }
};

function mouseClicked() {
    n = (n + - 2) % 15 + 3;
    background(0);
    mice = [];
    newMice = [];
    for(let i = 0; i < n; i ++) {
        mice[i] = [radius * cos(i * 360/n), radius * sin(i * 360/n)];
        newMice[i] = [null, null];
    }

    // stroke("WHITE");
    // beginShape();
    // for(let a = 0; a < 360; a += 360 / n) {
    //     vertex(radius * cos(a), radius * sin(a))
    // }
    // endShape(CLOSE);
}

function draw() {
    translate(width/2, height/2);
    rotate(360 / n / 2 - 90);

    for(let i = 0; i < mice.length; i ++) {
        newMice[i][0] = mice[i][0] + 0.05 * (mice[(i + 1) % mice.length][0] - mice[i][0]);
        newMice[i][1] = mice[i][1] + 0.05 * (mice[(i + 1) % mice.length][1] - mice[i][1]);
        stroke(i * 360/n, 220, 200);
        point(newMice[i][0], newMice[i][1]);
    };
    mice = [...newMice];

    stroke("WHITE");
    beginShape();
    for(let a = 0; a < 360; a += 360 / n) {
        vertex(radius * cos(a), radius * sin(a))
    }
    endShape(CLOSE);
};