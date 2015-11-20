
const SPEED = 2;

// ball
function ballClass() {
    this.x     = 75; //canvasWidth / 2;
    this.y     = 75; //canvasHeigth / 2;
    //this.speed = SPEED;
    //this.xSpeed = SPEED;
    //this.ySpeed = SPEED;
    var tempRandAng   = Math.random() * Math.PI * 2.0;
    var tempRandSpeed = 3.0 + Math.random() * 5.0;

    this.xSpeed = Math.cos(tempRandAng) * tempRandSpeed;
    this.ySpeed = Math.sin(tempRandAng) * tempRandSpeed;

    this.radius = 2;
    this.color  = '#FFFFFF';

    this.reset = function () {
        // random position
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeigth;

        //this.speed  = SPEED;
        this.xSpeed = SPEED;
        this.ySpeed = SPEED;

        while (getTileTypeAtPixelCoord(this.x, this.y) == LEVEL_WALL) {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeigth;
        }
    } // end of ballReset func
    
    this.move = function() {
        var xNext = this.x + this.xSpeed;
        var yNext = this.y + this.ySpeed;

        // Top
        if (
            yNext < this.y && getTileTypeAtPixelCoord(this.x, yNext) == LEVEL_WALL
            ) {
            this.ySpeed *= -1;
        }
        // Left
        if (
            xNext > this.x && getTileTypeAtPixelCoord(xNext, this.y) == LEVEL_WALL
            ) {
            this.xSpeed *= -1;
        }
        // down
        if (
            yNext > this.y && getTileTypeAtPixelCoord(this.x, yNext) == LEVEL_WALL
            ) {
            this.ySpeed *= -1;
        }
        // right
        if (
            xNext < this.x && getTileTypeAtPixelCoord(xNext, this.y) == LEVEL_WALL
            ) {
            this.xSpeed *= -1;
        }
        
        // ball movement
        this.x += this.xSpeed;
        this.y += this.ySpeed;

    } // end of ballMove func
    
    this.draw = function() {
        colorCircle(this.x, this.y, this.radius, this.color);
    } // end of ballDraw func

} // end of ballClass func
