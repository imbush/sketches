//Written by Inle Bush
let path, radIn;
let speed = 0.1;//angle per update
let ang = 0;
let mode = 0;

function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    // strokeWeight(2);
    radIn = width / 5;

    //image for path
    path = createGraphics(width, height);
    path.strokeWeight(2);
    path.stroke(220, 30, 30);

    ratioSlider = createSlider(-10, 10, 0.01, PI);
    ratio = PI;
    // frameRate(60);
    stroke(25)
    strokeWeight(3);
    fill(255);
    noStroke();
    mouseClicked();
}

// function mouseClicked() {
//     mode = (mode + 1) % 2;
// }

function mouseClicked() {
    
    background(153);
    // if (ratioSlider.value() != ratio) {
    //     ratio = ratioSlider.value()
    //     path.clear(); //resets path if ratio is changed
    // }
    
    // if (ratioSlider.value() >= -1 && ratioSlider.value() <= 0) {
    //     ratio = -1.1;
    // }   else {
    //     ratio = ratioSlider.value(); // ratio = (inner radius : outer radius)
    // }
    
    for ( let i = 0; i < 500000; i++) {
        radOut = radIn / ratio;
        xCentOut = width / 2 + (radOut + radIn) * cos(ang);
        yCentOut = height / 2 + (radOut + radIn) * sin(ang);

        if (mode == 1){
            circle(width/2, height/2, 2 * radIn);// inner Circle
            circle(xCentOut, yCentOut, 2 * radOut);
        }


        line(width/2, height/2, xCentOut, yCentOut);
        ptX = width / 2 + (radOut + radIn) * cos(ang) - radOut * cos((ratio + 1) * ang);
        ptY = height / 2 + (radOut + radIn) * sin(ang) - radOut * sin((ratio + 1) * ang);
        path.point(ptX, ptY);

        line(xCentOut, yCentOut, ptX, ptY);
        ang -= speed;
    }
    image(path, 0, 0);

    noStroke();
    fill(0);
    textSize(width / 20);
    text(`n = ${ratio}`, width / 50 , height * 3 / 50);
    fill(255);
    noStroke(0);
    save("pi_epicycloid.jpg")
}