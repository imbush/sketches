let height = 500;
let width = 500;
let alpha = 100;

function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
    background(100, 70, 50);
    strokeWeight(1);

    walkers = [];
    for (let i = 0; i < 500; i++) {
        walkers[i] = new Walker([random(0, width), random(0, height)], [random(70, 150), random(30, 100), 50])
    }
};

let Walker = function(position, colors) {
    this.position = position;
    this.colors = colors;
}

Walker.prototype.move = function() {
    this.position[0] = max(0, min(this.position[0] + random(-1, 1), width));
    this.position[1] = max(0, min(this.position[1] + random(-1, 1), height));
}

Walker.prototype.display = function() {
    stroke(this.colors[0], this.colors[1], this.colors[2], alpha);
    point(this.position[0], this.position[1])
}

function draw() {
    for (let i = 0; i < walkers.length; i++) {
        let p = walkers[i]
        for (let j = 0; j < 100; j++) {
            p.display();
            p.move();
        }
    }
};

function mouseClicked() {
    save("randomwalkRGB.jpg")
}