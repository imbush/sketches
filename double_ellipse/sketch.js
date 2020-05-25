//Written by Inle Bush
mode = 0;

function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function mouseClicked() {
    mode = (mode + 1) % 4;
}

function draw() {
    background(0);
    radius = 500;
    centerX = 500;
    centerY = 500;
    fill(255);
    circle(centerX, centerY, 2*radius);
    noFill();

    if (mode <= 1){
        x = mouseX;
        y = mouseY;
    } else {
        newX = mouseX;
        newY = mouseY;
    }

    //Outer Lines
    strokeWeight(1);
    n = 80;//number of lines
    norm_len = 1000; // 0.5*length of perpendicular bisectors
    for (ang = 0; ang < 360; ang+= floor(360/n)) {
        endX = centerX + radius * cos(ang)
        endY = centerY + radius * sin(ang)
        if (mode >= 1) {
                    midX = (x + endX)/2
                    midY = (y + endY)/2
                    scalar = norm_len/(sqrt((endX - x) ** 2 + (endY - y) ** 2))
                    diffY = scalar * (endX-x)
                    diffX = scalar * (endY-y)

                    line(midX + diffX, midY - diffY, midX - diffX, midY + diffY);
                }        
        if (mode <=1) {
            line(endX, endY, x, y);
        }
        // circle((x + centerX)/2, (y + centerY)/2, radius);
        // noFill();     
    }

    //Secondary Lines
    if (mode >= 2) {
        strokeWeight(1);
        n = 100;//number of lines
        norm_len = 1000; // 0.5*length of perpendicular bisectors
        angle = (atan((y - centerY)/(x - centerX)));
        if (x - centerX< 0) {
            angle += 180
        }

        for (endX = 0; endX < radius; endX += floor(radius / n)) {
            
            distCenter = ((centerX - x) ** 2 + (centerY - y) ** 2) ** 0.5;
            height = ((radius/2) ** 2 - (distCenter/2) ** 2) ** 0.5 //by pythagorean theroem, dist between focii = distCenter
            
            endY = (height**2 * (1 - (2 * (endX - radius/2)/radius)**2))**0.5; //by formula of ellipse

            var end = createVector(endX, endY)
            end.add(- (radius - distCenter)/2, 0)
            end.rotate(angle)
            end.add(500,500)

            midX = (newX + end.x)/2
            midY = (newY + end.y)/2
            scalar = norm_len/(sqrt((end.x - newX) ** 2 + (end.y - newY) ** 2))
            diffY = scalar * (end.x - newX)
            diffX = scalar * (end.y - newY)
            line(midX + diffX, midY - diffY, midX - diffX, midY + diffY); // perp bisector
            line(end.x, end.y, newX, newY);


            end.add(-500, -500)//resets
            end.rotate(-angle) 
            end.y = -end.y
            end.rotate(angle)
            end.add(500,500)

            midX = (newX + end.x)/2
            midY = (newY + end.y)/2
            scalar = norm_len/(sqrt((end.x - newX) ** 2 + (end.y - newY) ** 2))
            diffY = scalar * (end.x - newX)
            diffX = scalar * (end.y - newY)
            line(midX + diffX, midY - diffY, midX - diffX, midY + diffY); // perp bisector
            line(end.x, end.y, newX, newY);
        }
    }

    if (mode >= 1) {
        strokeWeight(10);
        stroke('red');
        point(x, y);
        point(centerX, centerY);
        
    }
    if (mode > 1){
        point(newX, newY);
    }
    stroke('black');
}