let height = 500;
let width = 500;
let border = 0;
let numPts = 10;
let speed = 0.5;
let friction = 0.7;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    background(0);
    stroke(255);
    strokeWeight(5);
    gravity = new createVector(0, 1)

    particles = [];
    for (let i = 0; i < numPts; i++) {
        let x = random(border, width - border);
        let y = random(border, height - border);
        let vect = new createVector(0, 1);
        particles[i] = new Particle([x, y], vect);
        console.log(particles)
    }
};

let Particle = function(position, vect, din) {
    this.position = position;
    this.vect = vect;
    this.diameter = din
}

Particle.prototype.accelerate = function(newVect) {
    this.vect.add(newVect);
}

Particle.prototype.move = function() {
    this.position[0] += speed * this.vect.x;
    this.position[1] += speed * this.vect.y;
}

Particle.prototype.display = function() {
    console.log(this.position)
    point(this.position[0], this.position[1])
}

Particle.prototype.bounce = function(surface) {
    for 
}

function draw() {
    background(0);
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.display();
        p.move();
        p.accelerate(new.Vector)
    }
};