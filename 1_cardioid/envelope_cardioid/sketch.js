//Written by Inle Bush
let height = 700;
let width = 700;
let radius = height/8 - 10;
let centerX = 350;
let centerY = 350;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    
}

function draw() {
    translate(centerX, centerY);
    rotate(-90)
    background(255)
    let x = mouseX;
    let y = mouseY;
    let centCount = min(max(1, floor(y *  3/ width)), 2);//number of points;
    let n = max(1, floor(x *  150/ width));//number of points


    fill(255);
    circle(0, 0, 2*radius);
    noFill();
    stroke('purple')

    if (centCount == 1) {
        for (let ang = 0; ang < 360; ang+= 360/n) { //loops through points on circle
            endX = radius * cos(ang)
            endY = radius * sin(ang)
            strokeWeight(5)
            point(endX, endY)
            strokeWeight(1)
            circle(endX, endY, 2 * ((radius - endX) ** 2 + endY ** 2) ** 0.5)
        }
    } else {
        for (let ang = 0; ang < 360/(centCount*2); ang += 360/n) { //loops through points on circle
            endRadius = radius * sin(ang)//radius of smaller circles
            for (let ang2 = 0; ang2 < 360; ang2 += 360/centCount) {
                console.log(ang2 + ang)
                endX = radius * cos(ang + ang2)
                endY = radius * sin(ang + ang2)
                strokeWeight(5)
                point(endX, endY)
                point(endX, -endY) //reflection
                strokeWeight(1)
                circle(endX, -endY, 2 * endRadius) //reflection
                circle(endX, endY, 2 * endRadius)
            }
        }
    }
}