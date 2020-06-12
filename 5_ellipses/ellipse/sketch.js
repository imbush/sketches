let perpBis = false;

function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function mouseClicked() {
    (perpBis) ? (perpBis = false) : (perpBis = true)
}

function draw() {
    background(255)

    radius = 200;
    centerX = 500;
    centerY = 500;
    circle(centerX, centerY, 2*radius);

    strokeWeight(10);
    point(centerX,centerY)
    x = mouseX;
    y = mouseY;
    point(mouseX,mouseY);
    
    strokeWeight(1);
    n = 80;//number of lines
    ang = 0;
    norm_len = 1000; // 0.5*length of perpendicular bisectors
    for (let ang = 0; ang < 360; ang+= floor(360/n)) {
        stroke(0);
        let endX = centerX + radius * cos(ang)
        let endY = centerY + radius * sin(ang)
        if (perpBis) {
                    let midX = (x + endX)/2
                    let midY = (y + endY)/2
                    scalar = norm_len/(sqrt((endX - x) ** 2 + (endY - y) ** 2))
                    diffY = scalar * (endX-x)
                    diffX = scalar * (endY-y)

                    line(midX + diffX, midY - diffY, midX - diffX, midY + diffY);
                    stroke(0)
                }
        line(endX, endY, x, y);
        circle((x + centerX)/2, (y + centerY)/2, radius);
        noFill();     
    }
}