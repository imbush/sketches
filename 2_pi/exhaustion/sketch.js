//Written by Inle Bush
let height = 700;
let width = 700;
let radius = 100;
let centerX = width/2;
let centerY = height/2;

function setup() {
    div0 = createDiv()

    textFont('Georgia');
    button = createButton("Reset");
    button.size(width, 40)
    button.mousePressed(reset);
    div0.child(button)

    createCanvas(height, width);
    angleMode(DEGREES);
    strokeWeight(1);
    stroke('white');
    n = 3; //number of sides of polygon

}

function mouseClicked() {
    n ++;
}

function reset() {
    n = 2;
}

function draw() {
    background(0);
    translate(centerX, centerY);

    noFill();
    circle(0, 0, 2*radius);
    
    fill('rgba(0,255,0, 0.25)')
    beginShape();
    for (let i = 0; i < n; i++) {
        ang = i * 360 / n
        vertex(radius * cos(ang), radius * sin(ang))
    }
    endShape(CLOSE);

    outRad = 1 / cos(180 / n)
    beginShape();
    for (let i = 0; i < n; i++) {
        ang = i * 360 / n
        vertex(outRad * radius * cos(ang), outRad * radius * sin(ang))
    }
    endShape(CLOSE);
    
    inPerimeter = 2 * n * sin(180 / n);
    outPerimeter = 2 * n * sin(180 / n) * outRad;
    inPi = inPerimeter / 2
    outPi = outPerimeter / 2

    stroke('white');
    textSize(20);
    fill('white');
    text(`Sides: ${n}\n${inPerimeter} < Perimeter < ${outPerimeter}\n${inPi} < π < ${outPi}`, 10 - centerX, 20 - centerY)
}