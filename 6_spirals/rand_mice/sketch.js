let height = 2000;
let width = 2000;
let n = 1000;
let mice = [];
let newMice = [];

function setup() {
    createCanvas(width, height);
    background(0);
    angleMode(DEGREES);
    strokeWeight(3);
    colorMode(HSL, 360);

    for(let i = 0; i < n; i ++) {
        mice.push([random(0, width), random(0, height)]);
        newMice.push([null, null])
    }
};

function mouseClicked() {
    save("rand_mice.jpg");
    background(0);
    for(let i = 0; i < n; i ++) {
        mice[i] = [random(0, width), random(0, height)];
    }
}

function draw() {
    for(let i = 0; i < mice.length; i ++) {
        newMice[i][0] = mice[i][0] + 0.05 * (mice[(i + 1) % mice.length][0] - mice[i][0]);
        newMice[i][1] = mice[i][1] + 0.05 * (mice[(i + 1) % mice.length][1] - mice[i][1]);
        stroke(i * 360/n, 200, 200);
        point(newMice[i][0], newMice[i][1]);
    };
    mice = [...newMice];
};