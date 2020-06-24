let height = 500;
let width = 1000;
let circX, circY;
let radius = 30;
let light, med, dark;
let screens = 5;
n = 80000

function setup() {
    createCanvas(width, height);
    fullColor = createGraphics(width, height/screens);
    points = createGraphics(width, height/screens);
    lines = createGraphics(width, height/screens);
    vertLines = createGraphics(width, height/screens);
    walkerShade = createGraphics(width, height/screens);
    points.background(255);
    vertLines.background(255);
    lines.background(255);
    walkerShade.background(255);
    walkerShade.stroke(0);
    noFill();
    angleMode(DEGREES);
    mouseClicked();
};

function mouseClicked() {
    fullColor.noStroke();
    for(let i = 0; i < width; i++) {
        fullColor.fill(255 - 255 * i / width);
        fullColor.rect(i, 0, 1, height / screens);
    }
    image(fullColor, 0, 0);

    for (let i = 0; i < n; i++) {
        points.point(random(i * width / n, width), random(0, height / screens));
    }
    image(points, 0, height/screens);

    vertLines.stroke(0, 0, 0, 50)
    for (let i = 0; i < n / 20; i++) {
        x = random(i * width * 20 / n, width)
        vertLines.line(x, 0, x, height / 3);
    }
    image(vertLines, 0, 2 * height/screens);

    lines.stroke(0, 0, 0, 5)
    lines.strokeWeight(1);
    for (let i = 0; i < n / 10; i++) {
        lines.line(random(i * width / n, width), random(0, height / screens), width, random(0, height / screens));
    }
    image(lines, 0, 3 * height/screens);

    walkers = [];
    for (let i = 0; i < 500; i++) {
        walkers[i] = new Walker([width, random(0, height / screens)], [0, 0, 0]);
    }

    image(points, 0, height/screens);
}

function draw () {
    for (let i = 0; i < walkers.length; i++) {
        let p = walkers[i]
        for (let j = 0; j < 10; j++) {
            p.display();
            p.move();
        }
    }

    image(walkerShade, 0, 4 * height/screens);
}


let Walker = function(position, colors) {
    this.position = position;
    this.colors = colors;
}

Walker.prototype.move = function() {
    this.position[0] = max(0, min(this.position[0] + random(-10, 10), width));
    this.position[1] = max(0, min(this.position[1] + random(-5, 5), height / screens));
}

Walker.prototype.display = function() {
    walkerShade.stroke(this.colors[0], this.colors[1], this.colors[2], 10);
    walkerShade.point(this.position[0], this.position[1])
}