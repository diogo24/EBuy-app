
const GROUNDSPEED_DECAY_MLT = 0.94;
const DRIVE_POWER           = 0.5;
const REVERSE_POWER         = 0.2;
const TURN_RATE             = 0.06;
const MIN_SPEED_TO_TURN     = 0.5;

// warrior
function warriorClass() {
    this.x     = 75; //canvasWidth / 2;
    this.y     = 75; //canvasHeigth / 2;
    this.speed = 0;
    this.ang   = 0;
    this.warriorPic; // which picture to use
    this.name = "defaultName";
    
    this.keyHeld_Gas       = false;
    this.keyHeld_Reverse   = false;
    this.keyHeld_TurnLeft  = false;
    this.keyHeld_TurnRight = false;
        
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
        this.speed      = 0;

        for (var rowIdx = 0; rowIdx < WORLD_ROWS; rowIdx++) {
            for (var colIdX = 0; colIdX < WORLD_COLS; colIdX++) {
                if (worldGrid[rowIdx][colIdX] == WORLD_PLAYER_START) {
                    worldGrid[rowIdx][colIdX] = WORLD_ROAD;

                    this.ang = -Math.PI / 2;

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
        this.speed *= GROUNDSPEED_DECAY_MLT;

        if (this.keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }
        if (this.keyHeld_Reverse) {
            this.speed -= REVERSE_POWER;
        }

        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {

            if (this.keyHeld_TurnLeft) {
                this.ang -= TURN_RATE;
            }
            if (this.keyHeld_TurnRight) {
                this.ang += TURN_RATE;
            }
        }

        // warrior
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;

        warriorWorldHandling(this);
    } // end of warriorMove func
    
    this.draw = function() {
        // warrior
        //if (warriorPicLoaded) {
        drawBitMapCenteredWithRotation(this.warriorPic, this.x, this.y, this.ang);
        //}
    } // end of warriorDraw func

} // end of warriorClass func
