// track
const TRACK_W    = 40;
const TRACK_H    = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
const TRACK_GAP  = 5;

var trackGrid = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                 [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                 [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                 [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                 [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                 [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
                 [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const TRACK_ROAD         = 0;
const TRACK_WALL         = 1;
const TRACK_PLAYER_START = 2;

function carTrackHandling() {
    // car position in the grid
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);

    // remove tracks with car
    if (carTrackCol >= 0
        && carTrackCol < TRACK_COLS
        && carTrackRow >= 0
        && carTrackRow < TRACK_ROWS) {

        // remove track and change car direction
        if (trackGrid[carTrackRow] && trackGrid[carTrackRow][carTrackCol] == TRACK_WALL) {
            // next 2 lines added to fix bug, undoes the cr movement which got it onto the wall            

            carX -= Math.cos(carAng) * carSpeed;
            carY -= Math.sin(carAng) * carSpeed;

            carSpeed *= -0.5;
        } // end of track found
    } // end of valid col and row
} // end of carTrackHandling func

function drawTracks() {
    // display tracks grid
    for (var rowIdx = 0; rowIdx < TRACK_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < TRACK_COLS; colIdX++) {
            if (trackGrid[rowIdx][colIdX] == TRACK_WALL) {
                canvasContext.drawImage(wallPic, TRACK_W * colIdX, TRACK_H * rowIdx);
                //colorRect((TRACK_W * colIdX), (TRACK_H * rowIdx), TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP, 'red');
            } // end of is this track visible
            else {                
                canvasContext.drawImage(roadPic, TRACK_W * colIdX, TRACK_H * rowIdx);
            }
        } // end of for each display track
    }
} // end of drawTracks function