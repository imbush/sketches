let n = 1000;
let move_rate = 0.001
let mice = [];
let newMice = [];

function setup() {
    createCanvas(screen.width - 10, screen.height - 10);
    background(0);
    angleMode(DEGREES);
    strokeWeight(1);
    colorMode(HSL, 360);

    for (let i = 0; i < n; i ++) {
        mice.push([random(0, width), random(0, height)]);
        newMice.push([null, null])
    }
};

function mouseClicked() {
    // save("rand_mice.jpg");
    fs = fullscreen();
    fullscreen(!fs);
    background(0);
    for(let i = 0; i < n; i ++) {
        mice[i] = [random(0, width), random(0, height)];
    }
}

function draw() {
    for(let i = 0; i < mice.length; i ++) {
        newMice[i][0] = mice[i][0] + move_rate * (mice[(i + 1) % mice.length][0] - mice[i][0]);
        newMice[i][1] = mice[i][1] + move_rate * (mice[(i + 1) % mice.length][1] - mice[i][1]);
        stroke(i * 360/n, 200, 200);
        point(newMice[i][0], newMice[i][1]);
    }
    mice = [...newMice];
}