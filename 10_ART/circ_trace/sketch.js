let height = 500;
let width = 500;
let circX, circY;
let radius = 30;
let light, med, dark;

function setup() {
    createCanvas(width, height);
    light = createGraphics(width/3,height);
    med = createGraphics(width/3,height);
    dark = createGraphics(width/3,height);
    light.background(255);
    med.background(255);
    dark.background(255);
    noFill();
    angleMode(DEGREES);
    mouseClicked();
};

function mouseClicked() {
    light.noFill();
    light.strokeWeight(1);
    for (let i = 0; i < 50; i ++) {
        light.circle(random(- 0.5 * width, 1.5 * width), random(-0.5 * height, 1.5 * height), random(1, 400));
    }
    image(light, 0, 0)

    med.noFill();
    med.strokeWeight(1);
    for (let i = 0; i < 200; i ++) {
        med.circle(random(- 0.5 * width, width), random(- 0.5 * height, height), random(1, 400));
    }
    image(med, width/3, 0);

    dark.noFill();
    dark.strokeWeight(1);
    for (let i = 0; i < 500; i ++) {
        dark.circle(random(- 0.5 * width, width), random(- 0.5 * height, height), random(1, 400));
    }
    image(dark, 2*width/3, 0);

    strokeWeight(3)
    stroke(255)
    for (let rad = 200; rad < width; rad++) {
        circle(width/2, height/2, rad * 2)
    }
}
