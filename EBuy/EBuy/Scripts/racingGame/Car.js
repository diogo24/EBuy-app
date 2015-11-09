// car
var carX     = 75; //canvasWidth / 2;
var carY     = 75; //canvasHeigth / 2;
var carSpeed = 0;
var carAng   = 0;

const GROUNDSPEED_DECAY_MLT = 0.94;
const DRIVE_POWER           = 0.5;
const REVERSE_POWER         = 0.2;
const TURN_RATE             = 0.06;
const MIN_SPEED_TO_TURN     = 0.5;

function carReset() {
    for (var rowIdx = 0; rowIdx < TRACK_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < TRACK_COLS; colIdX++) {
            if (trackGrid[rowIdx][colIdX] == TRACK_PLAYER_START) {
                trackGrid[rowIdx][colIdX] = TRACK_ROAD;

                carAng = -Math.PI / 2;

                // car position + center car
                carX = TRACK_W * colIdX + (TRACK_W / 2);
                carY = TRACK_H * rowIdx + (TRACK_H / 2);
                return;
            } // end of is this car start place
        } // end of for each locating car start
    }
}

function carMove() {
    // degrade spead - attrition
    carSpeed *= GROUNDSPEED_DECAY_MLT;

    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= REVERSE_POWER;
    }

    if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {

        if (keyHeld_TurnLeft) {
            carAng -= TURN_RATE;
        }
        if (keyHeld_TurnRight) {
            carAng += TURN_RATE;
        }
    }

    // car
    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
    //carAng += 0.02;
}

function carDraw() {
    // car
    //if (carPicLoaded) {
        drawBitMapCenteredWithRotation(carPic, carX, carY, carAng);
    //}
}
