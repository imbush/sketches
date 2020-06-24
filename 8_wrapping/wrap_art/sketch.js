let height = 500;
let width = 500;
let border = 0;
let numPts = 50;
let alpha = 250;
let radius = 2 * height / 5;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    mouseClicked();
}

function leftMost(points) { 
    //points = list of [x, y]
    var leftest = points[0][0];
    var index = 0;
    for (let i = 1; i < points.length; i++) {
        if (leftest > points[i][0]) {
            index = i;
            leftest = points[i][0];
        }
    }
    return index;
}

function jarvis(s) {
    //s is set of points, made from pseudocode @https://en.wikipedia.org/wiki/Gift_wrapping_algorithm
    var hull = []; //set of points on hull in order
    //var minX  = s.map(function();
    var pointOnHull = s[leftMost(s)];
    let i = 0;
    do {
        hull.push(pointOnHull);
        endPoint = s[0];
        for (let j = 1; j < s.length; j++) {
            vect1 = createVector(endPoint[0] - hull[i][0], endPoint[1] - hull[i][1]);
            vect2 = createVector(s[j][0] - hull[i][0], s[j][1] - hull[i][1]);
            angle = vect1.angleBetween(vect2);
            if (endPoint == pointOnHull || angle < 0) {
                endPoint = s[j];
            }
        }
        pointOnHull = endPoint;
        i++
    } while (endPoint != hull[0]);

    return hull;
}

function mouseClicked() {
    push();
    background(220, 200, 200);
    translate(width / 2, height / 2);

    var points = []
    for (let i = 0; i < numPts; i++) {
        x = random(- radius, radius);
        y = (radius * radius - x * x) ** 0.5
        y = max(-y, min(y, random(-radius, radius)));
        points[i] = [x, y];
    }
    for (let i = 0; i < 50; i ++) {
        points.push([radius * cos(i * 360 / 50), radius * sin(i * 360 / 50)]);
    }

    noStroke();
    recurseHulls(points);
    pop();
}

function recurseHulls(points) {
    if (points.length < 3) {
        return;
    }
    fill(random(80, 180), random(60, 100), 100, alpha)
    const hull = jarvis(points);
    beginShape();
    for (let i = 0; i < hull.length; i++) {
        vertex(hull[i][0], hull[i][1]);
    }
    endShape(CLOSE);

    removed = random(hull);
    for (let i = 0; i < points.length; i++) {
        if (points[i] == removed) {
            points.splice(i, 1);
            break;
        };
    };
    
    recurseHulls(points);
}