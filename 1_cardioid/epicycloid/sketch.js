//Written by Inle Bush
let height = 1000;
let width = 1000;
let path;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    strokeWeight(2);

    //image for path
    path = createGraphics(height, width)
    path.strokeWeight(1);
    path.stroke('red')

    ratioSlider = createSlider(-10, 10, 1, PI);
    ratioSlider.position(10,70);
    lastRatio = ratioSlider.value();
}

let speed = 1;//angle per update
let ang = 0;
let ang2 = 0;
let points = [];

function draw() {
    if (ratioSlider.value() != lastRatio) {
        lastRatio = ratioSlider.value()
        path.clear(); //resets path if ratio is changed
    }


    background(100)
    text(ratioSlider.value(), ratioSlider.x * 2 + ratioSlider.width, 15)
    //inner Circle
    radius = 100;
    centerX = 350;
    centerY = 350;
    circle(centerX, centerY, 2*radius);
    
    x = mouseX;
    y = mouseY;
    
    if (ratioSlider.value() >= -1 && ratioSlider.value() <= 0) {
        ratio = -1.1;
    }   else {
        ratio = ratioSlider.value(); // stationary radius/rotation radius
    }

    rotRad = radius/ratio;
    rotCentX = centerX + (rotRad + radius) * cos(ang);
    rotCentY = centerY + (rotRad + radius) * sin(ang);
    ang -= speed;
    circle(rotCentX, rotCentY, 2*rotRad)

    ang2 -= speed * (ratio+1);
    path.point(rotCentX + rotRad * cos(ang2), rotCentY + rotRad * sin(ang2))
    image(path,0,0)
    line(rotCentX, rotCentY, rotCentX + rotRad * cos(ang2), rotCentY + rotRad * sin(ang2))
}