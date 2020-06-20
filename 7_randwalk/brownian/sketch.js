let height = 500;
let width = 500;
let alpha = 3;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    background(0);
    strokeWeight(1);

    walkers = [];
    for (let i = 0; i < 500; i++) {
        // walkers[i] = new Walker([random(0, 10), random(0, height)], [255, 255, 255])
        walkers[i] = new Walker([width/2, height/2], [255, 255, 255])
    }

    // walkers = [
    //     new Walker([width/2, height/2], [255, 0, 0]),
    //     new Walker([width/2, height/2], [0, 255, 0]),
    //     new Walker([width/2, height/2], [0, 0, 255])
    // ];  
};

let Walker = function(position, colors) {
    this.position = position;
    this.colors = colors;
}

Walker.prototype.move = function() {
    this.position[0] = max(0, min(this.position[0] + random(-3, 3), width));
    this.position[1] = max(0, min(this.position[1] + random(-3, 3), height));
}

Walker.prototype.display = function() {
    stroke(this.colors[0], this.colors[1], this.colors[2], alpha);
    point(this.position[0], this.position[1])
}

function draw() {
    background(0, 0, 0, 0)
    for (let i = 0; i < walkers.length; i++) {
        let p = walkers[i]
        for (let j = 0; j < 1; j++) {
            console.log(p.position)
            p.display();
            p.move();
        }
    }
};

function mouseClicked() {
    save("randomwalkRGB.jpg")
}