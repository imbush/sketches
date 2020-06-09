let width = 500;
let height = 500;
let scale = 500; //pixels to unit
let maxIter = 100;

let centerRe = 0; //Natural number axis center
let centerIm = 0; //Imaginary number axis center

function setup() {
    createCanvas(width, height);
    pixelDensity(3);
    d = pixelDensity();
}

function escapeTime(a, b) {
    zA = 0; //real part of iteration
    zB = 0; //imaginary part of iteration
    n = 0;

    while (zA * zA + zB * zB <= 4 && n < maxIter) {
        tempzA = zA * zA + zB * zB + a;
        zB = 2 * zA * zB + b;
        zA = tempzA;
        n++;
    }
    return n;
}

function mouseClicked() {
    loadPixels();
    pixelHeight = floor(height * d);
    pixelWidth = floor(width * d);
    for (let x = 0; x < pixelWidth; x ++) {
        for (let y = 0; y < pixelHeight; y ++) {
            pixelIndex = 4 * (x + y * pixelWidth);

            Re =  - ((x * pixelDensity - width / 2) / scale + centerRe); //imaginary value of pixel
            Im =  - ((y * pixelDensity - height / 2) / scale + centerIm); //real value of pixel
            
            n = escapeTime(Re, Im);

            // pixels[pixelIndex] = 200;
            // pixels[pixelIndex + 1] = 255;
            // pixels[pixelIndex + 2] = 255;
            // pixels[pixelIndex + 3] = 255;

            pixels[pixelIndex] = (maxIter - n)/maxIter * 255;
            pixels[pixelIndex + 1] = (maxIter - n)/maxIter * 255;
            pixels[pixelIndex + 2] = (maxIter - n)/maxIter * 255;
            pixels[pixelIndex + 3] = 255;
        }
    }
    console.log("this")
    updatePixels();
}