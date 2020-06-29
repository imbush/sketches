//Written by Inle Bush
var xOff = 0;
var yOff = 0;
var increment = 0.01;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    loadPixels();
    yOff = 0;
    for(var y = 0; y < height; y ++) {
        xOff = 0;
        for(var x = 0; x < width; x++){
            var index = 4 * (x + y * width);
            bright = 255 * noise(xOff, yOff);
            pixels[index] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;
            xOff += increment;
        }
        yOff += increment;
    }
    updatePixels();
}