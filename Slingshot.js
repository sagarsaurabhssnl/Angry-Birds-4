class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 0.01
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if (pointA.x < 220) {
                strokeWeight(10);
                stroke("#301608");
                line(pointA.x, pointA.y, pointB.x - 25, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 25, pointB.y);
                imageMode(CENTER);
                image(this.sling3, pointA.x - 20, pointA.y, 15, 30);
            }else{
                strokeWeight(5);
                stroke("#301608");
                line(pointA.x, pointA.y, pointB.x - 25, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 25, pointB.y);
                imageMode(CENTER);
                image(this.sling3, pointA.x + 25, pointA.y, 15, 30);
            }
            pop();
        }
    }

}