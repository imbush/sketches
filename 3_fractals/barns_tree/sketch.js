let width = 500; //1300 * n
let height = 500; //1200 * n
let unitWidth = 4;
let scale = width / 2 / unitWidth; //pixels to unit
let maxIter = 100;

let centerRe = 0; //Natural number axis center
let centerIm = 0; //Imaginary number axis center

let cA = - 0.6;
let cB = 1.1;

let k = 4;
function setup() {
    createCanvas(width, height);
    pixelDensity(1);
    d = pixelDensity();
    scale = scale * d; //accounts for scaling due to d

    pixelHeight = floor(height * d);
    pixelWidth = floor(width * d);
    updateScreen();
}

function hueToRGB(H) {
    let R = Math.abs(H * 6.0 - 3.0) - 1.0;
    let G = 2.0 - Math.abs(H * 6.0 - 2.0);
    let B = 1.0 - Math.abs(H * 6.0 - 4.0);
    return [Math.max(0, Math.min(255, R*255)),
            Math.max(0, Math.min(255, G*255)),
            Math.max(0, Math.min(255, B*255))];
}

function escapeTime(a, b) {
    zA = a; //real part of iteration
    zB = b; //imaginary part of iteration
    n = 0;
    while (zA * zA + zB * zB <= k && n < maxIter) {
        (zA == 0) ? signRe = 0 : signRe = zA / abs(zA); //Sign of real part of z
        tempzA = cA * (zA - signRe) - cB * zB;
        zB = cB * (zA - signRe) + cA * zB
        zA = tempzA;
        n++;
    }
    return n;
}

function updateScreen() {
    loadPixels();
    for (let x = 0; x < pixelWidth; x ++) {
        for (let y = 0; y < pixelHeight; y ++) {
            pixelIndex = 4 * (x + y * pixelWidth);

            Re = ((x - d * width / 2) / scale + centerRe); //imaginary value of pixel
            Im = (y - d * height / 2) / scale + centerIm; //real value of pixel

            n = escapeTime(Re, Im);

            pixColor = hueToRGB(n ** 2 / 50 ** 2);
            pixels[pixelIndex] = pixColor[0];
            pixels[pixelIndex + 1] = pixColor[1];
            pixels[pixelIndex + 2] = pixColor[2];
            pixels[pixelIndex + 3] = 255;
            
        }
    }
    updatePixels();
};

function mouseClicked() {
    k ++;
    updateScreen();
}