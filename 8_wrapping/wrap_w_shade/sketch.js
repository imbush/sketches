let height = 500;
let width = 500;
let border = 0;
let numPts = 50;
let shapeAlpha = 250;
let shadeAlpha = 100;
let radius = 2 * height / 5;
let work;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    mouseClicked();
}

function mouseClicked() {
    background(0);
    work = createGraphics(height, width);
    work.translate(width/2, height/2)
    work.noStroke();

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
    recurseHulls(points);
    work.stroke(0);
    work.noFill();
    work.strokeWeight(2);
    work.circle(0, 0, radius * 2);

    walkers = [];
    for (let i = 0; i < 500; i++) {
        xy = random([
            [0, random(0, height)],
            [width, random(0, height)],
            [random(0, width), 0], 
            [random(0, width), height]
        ]);
        walkers[i] = new Walker([xy[0], xy[1]], random([[200, 180, 180], [random(60, 160), random(40, 80), 80]]));
    }
}

function draw() {
    strokeWeight(1);
    for (let i = 0; i < walkers.length; i++) {
        let p = walkers[i]
        for (let j = 0; j < 10; j++) {
            p.display();
            p.move();
        }
    }
    image(work, 0, 0);
};

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

function recurseHulls(points) {
    if (points.length < 3) {
        return;
    }
    work.fill(random(80, 180), random(60, 100), 100, shapeAlpha)
    const hull = jarvis(points);
    work.beginShape();
    for (let i = 0; i < hull.length; i++) {
        work.vertex(hull[i][0], hull[i][1]);
        work.point(hull[i][0], hull[i][1])
    }
    work.endShape(CLOSE);

    removed = random(hull);
    for (let i = 0; i < points.length; i++) {
        if (points[i] == removed) {
            points.splice(i, 1);
            break;
        };
    };
    
    recurseHulls(points);
}

let Walker = function(position, colors) {
    this.position = position;
    this.colors = colors;
}

Walker.prototype.move = function() {
    this.position[0] = max(0, min(this.position[0] + random(-3, 3), width));
    this.position[1] = max(0, min(this.position[1] + random(-3, 3), height));
}

Walker.prototype.display = function() {
    stroke(this.colors[0], this.colors[1], this.colors[2], shadeAlpha);
    point(this.position[0], this.position[1])
}

