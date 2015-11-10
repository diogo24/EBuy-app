const WALK_SPEED = 3.0;

// warrior
function warriorClass() {
    this.x     = 75; //canvasWidth / 2;
    this.y     = 75; //canvasHeigth / 2;
    this.warriorPic; // which picture to use
    this.name = "defaultName";
    this.walkSpeed = WALK_SPEED;
    
    this.keyHeld_North = false;
    this.keyHeld_South = false;
    this.keyHeld_West  = false;
    this.keyHeld_East  = false;
        
    this.controlKeyUP;
    this.controlKeyRIGTH;
    this.controlKeyDOWN;
    this.controlKeyLEFT;

    this.setupInput = function(upKey, rightKey, downKey, leftKey) {
        this.controlKeyUP    = upKey;
        this.controlKeyRIGTH = rightKey;
        this.controlKeyDOWN  = downKey;
        this.controlKeyLEFT  = leftKey;
    }

    this.reset = function (warriorImg, warriorName) {
        this.name       = warriorName;
        this.warriorPic = warriorImg;

        for (var rowIdx = 0; rowIdx < WORLD_ROWS; rowIdx++) {
            for (var colIdX = 0; colIdX < WORLD_COLS; colIdX++) {
                if (worldGrid[rowIdx][colIdX] == WORLD_PLAYER_START) {
                    worldGrid[rowIdx][colIdX] = WORLD_ROAD;

                    // warrior position + center warrior
                    this.x = WORLD_W * colIdX + (WORLD_W / 2);
                    this.y = WORLD_H * rowIdx + (WORLD_H / 2);
                    return;
                } // end of is this warrior start place
            } // end of for each locating warrior start
        } // end of row for
        console.log("No PLAYER START FOUND");
    } // end of wariorReset func
    
    this.move = function() {
        // degrade spead - attrition
        var nextX = this.x;
        var nextY = this.y;

        if (this.keyHeld_North) {
            nextY -= this.walkSpeed;
        }
        if (this.keyHeld_South) {
            nextY += this.walkSpeed;
        }
        if (this.keyHeld_West) {
            nextX -= this.walkSpeed;
        }
        if (this.keyHeld_East) {
            nextX += this.walkSpeed;
        }

        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);

        if (walkIntoTileIndex == WORLD_END_FLAG) {
			console.log(this.name + " WINS!");
			loadLevel(level1);
        }
        else if (walkIntoTileIndex == WORLD_ROAD) {
			this.x = nextX;
			this.y = nextY;
        }
    } // end of warriorMove func
    
    this.draw = function() {
        drawBitMapCenteredWithRotation(this.warriorPic, this.x, this.y, 0);
    } // end of warriorDraw func

} // end of warriorClass func
