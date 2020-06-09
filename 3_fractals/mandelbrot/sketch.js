let width = 1000;
let height = 1000;
let unitWidth = 0.05;
let scale = width / 2 / unitWidth; //pixels to unit
let maxIter = 50;

let centerRe = -1.4809808960910091; //Natural number axis center
let centerIm = 0.0016656693222284395; //Imaginary number axis center

function setup() {
    createCanvas(width, height);
    pixelDensity(1);
    d = pixelDensity();
    scale = scale * d; //accounts for scaling due to d

    pixelHeight = floor(height * d);
    pixelWidth = floor(width * d);

    //colorMode(HSL, maxIter);
}

function escapeTime(a, b) {
    zA = 0; //real part of iteration
    zB = 0; //imaginary part of iteration
    n = 0;

    while (zA * zA + zB * zB <= 4 && n < maxIter) {
        tempzA = zA * zA - zB * zB + a;
        zB = 2 * zA * zB + b;
        zA = tempzA;
        n++;
    }
    return n;
}

function mouseClicked() {
    loadPixels();
    for (let x = 0; x < pixelWidth; x ++) {
        for (let y = 0; y < pixelHeight; y ++) {
            pixelIndex = 4 * (x + y * pixelWidth);

            Re = ((x - d * width / 2) / scale + centerRe); //imaginary value of pixel
            Im = (y - d * height / 2) / scale + centerIm; //real value of pixel

            n = escapeTime(Re, Im);

            // pixels[pixelIndex] = 200;
            // pixels[pixelIndex + 1] = 255;
            // pixels[pixelIndex + 2] = 255;
            // pixels[pixelIndex + 3] = 255;
                
            pixels[pixelIndex] = (maxIter - n)/maxIter * 200;
            pixels[pixelIndex + 1] = (maxIter - n)/maxIter * 200;
            pixels[pixelIndex + 2] = (maxIter - n)/maxIter * 200;
            pixels[pixelIndex + 3] = 255;
        }
    }
    console.log("this")
    updatePixels();
    maxIter ++;
}