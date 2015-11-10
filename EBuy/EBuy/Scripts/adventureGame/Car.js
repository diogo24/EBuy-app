
const GROUNDSPEED_DECAY_MLT = 0.94;
const DRIVE_POWER           = 0.5;
const REVERSE_POWER         = 0.2;
const TURN_RATE             = 0.06;
const MIN_SPEED_TO_TURN     = 0.5;

// car
function carClass() {
    this.x     = 75; //canvasWidth / 2;
    this.y     = 75; //canvasHeigth / 2;
    this.speed = 0;
    this.ang   = 0;
    this.carPic; // which picture to use
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

    this.reset = function (carImg, carName) {
        this.name   = carName;
        this.carPic = carImg;
        this.speed  = 0;

        for (var rowIdx = 0; rowIdx < TRACK_ROWS; rowIdx++) {
            for (var colIdX = 0; colIdX < TRACK_COLS; colIdX++) {
                if (trackGrid[rowIdx][colIdX] == TRACK_PLAYER_START) {
                    trackGrid[rowIdx][colIdX] = TRACK_ROAD;

                    this.ang = -Math.PI / 2;

                    // car position + center car
                    this.x = TRACK_W * colIdX + (TRACK_W / 2);
                    this.y = TRACK_H * rowIdx + (TRACK_H / 2);
                    return;
                } // end of is this car start place
            } // end of for each locating car start
        } // end of row for
        console.log("No PLAYER START FOUND");
    } // end of carReset func
    
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

        // car
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;
        //carAng += 0.02;

        carTrackHandling(this);
    } // end of carMove func
    
    this.draw = function() {
        // car
        //if (carPicLoaded) {
        drawBitMapCenteredWithRotation(this.carPic, this.x, this.y, this.ang);
        //}
    } // end of carDraw func

} // end of carClass func
