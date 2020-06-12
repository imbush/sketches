//Written by Inle Bush
let height = 500;
let width = 500;
let centers = [];
let fr = 120; //Changes animation
let overlay;
let centerCount = 500;
let growthRate = 1;
let growthRange = 0;

function setup() {
    createCanvas(width, height);
    overlay = createImage(width, height);
    angleMode(DEGREES);
    fill(255);
    strokeWeight(1);
    frameRate(fr);
    pixelSize = 4 * width * height * pixelDensity() ** 2;

    for (let i = 0; i < centerCount; i++) {
        centers[i] = new Center([random(width), random(height)], [random(10, 220), random(10, 150), 0], random(growthRate, growthRate + growthRange));
    }
}

let Center = function(position, color, growthRate) {
    this.position = position;
    this.color = color //img.get(position[0], position[1]);
    this.radius = 1;
    this.growthRate = growthRate;
}

Center.prototype.grow = function() {
    this.radius += this.growthRate;
}

function mouseClicked() {
    overlay = createImage(width, height);
    clear();
    centers = [];
    for (let i = 0; i < centerCount; i++) {
        centers[i] = new Center([random(width), random(height)], [random(10, 220), random(10, 220),0], random(growthRate, growthRate + growthRange));
    }
}

function draw() {
    overlay.loadPixels();
    loadPixels();
    for (let i = 0; i < pixelSize; i ++) { //I don't know why but shifting 1 fixes the problem
        if (overlay.pixels[i + 3] == 0) {
            overlay.pixels[i] = pixels[i];
            overlay.pixels[i + 1] = pixels[i + 1];
            overlay.pixels[i + 2] = pixels[i + 2];
            overlay.pixels[i + 3] = pixels[i + 3];
        }
      }
    overlay.updatePixels();


    for(let i = 0; i < centers.length; i++) {
        noStroke();
        fill(centers[i].color);
        circle(centers[i].position[0], centers[i].position[1], centers[i].radius);
        centers[i].grow();
    } 
    image(overlay, 0, 0);
}