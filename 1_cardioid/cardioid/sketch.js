//Written by Inle Bush
let height = 600;
let width = 600;
function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    colorMode(HSL, 360)
}


function draw() {
    background(0)
    radius = height/2 - 10;
    centerX = height/2;
    centerY = width/2;
    fill(0);
    circle(centerX, centerY, 2*radius);
    noFill();

    
    x = mouseX;
    y = mouseY;
    
    //Outer Lines
    push();
    n = max(30,floor(x *  150/ width));//number of lines
    norm_len = 1000; // 0.5*length of perpendicular bisectors
    ends = [];
    ang = 0

    translate(centerX, centerY);
    rotate(90 + 4 * 360/n)
    
    stroke('white')
    for (ang = 0; ang <= 360; ang+= 360/n) {
        endX = radius * cos(ang)
        endY = radius * sin(ang)
        ends.push([endX, endY]);
        strokeWeight(7)
        point(endX, endY)
    }

    strokeWeight(1);
    leaves = max(1, floor(y * 15 / height))
    end = leaves + 1
    for (let i = 0; i < n ; i++) {
        stroke((i*360/n) % 360, 360, 200)
        end = (end + leaves + 1) % n
        line(ends[i][0], ends[i][1], ends[end][0], ends[end][1])
    }
    pop();
}