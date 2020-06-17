let height = 800;
let width = 1280;
let alpha = 1;

function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
    background(0);
    strokeWeight(1);

    // walkers = [];
    // for (let i = 0; i < 1000; i++) {
    //     walkers[i] = new Walker([random(0, width), random(0, height)], [random(0, 255), random(0, 255), 0])
    // }

    walkers = [
        new Walker([width/2, height/2], [255, 0, 0]),
        new Walker([width/2, height/2], [0, 255, 0]),
        new Walker([width/2, height/2], [0, 0, 255])
    ];  
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
        for (let j = 0; j < 1000; j++) {
            console.log(p.position)
            p.display();
            p.move();
        }
    }
};

function mouseClicked() {
    save("randomwalkRGB.jpg")
}