// track
const TRACK_W    = 40;
const TRACK_H    = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
const TRACK_GAP  = 5;

var level1 = [[4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
                 [4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                 [4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                 [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                 [1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                 [1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                 [1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1],
                 [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                 [0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
                 [0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 4, 1, 0, 0, 0, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4]
];

//var levelList = [level1]; // list of multiple levels
var trackGrid = [];

const TRACK_ROAD         = 0;
const TRACK_WALL         = 1;
const TRACK_PLAYER_START = 2;
const TRACK_END_FLAG     = 3;
const TRACK_TREE         = 4;
const TRACK_FLAG         = 5;


function carTrackHandling(carObject) {
    // car position in the grid
    var carTrackCol = Math.floor(carObject.x / TRACK_W);
    var carTrackRow = Math.floor(carObject.y / TRACK_H);

    // remove tracks with car
    if (carTrackCol >= 0
        && carTrackCol < TRACK_COLS
        && carTrackRow >= 0
        && carTrackRow < TRACK_ROWS) {

        // remove track and change car direction
        if (trackGrid[carTrackRow] &&
            (trackGrid[carTrackRow][carTrackCol] == TRACK_WALL
            || trackGrid[carTrackRow][carTrackCol] == TRACK_FLAG
            )
            ) {
            // next 2 lines added to fix bug, undoes the cr movement which got it onto the wall            

            carObject.x -= Math.cos(carObject.ang) * carObject.speed;
            carObject.y -= Math.sin(carObject.ang) * carObject.speed;

            carObject.speed *= -0.5;
        } // end of track found

        if(trackGrid[carTrackRow] && trackGrid[carTrackRow][carTrackCol] == TRACK_END_FLAG) {
            //console.log(carObject.name);
            loadLevel(level1);
        }
    } // end of valid col and row
} // end of carTrackHandling func

function drawTracks() {
    // display tracks grid
    var drawTileX = 0;
    var drawTileY = 0;
    for (var rowIdx = 0; rowIdx < TRACK_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < TRACK_COLS; colIdX++) {
            //if (trackGrid[rowIdx][colIdX] == TRACK_WALL) {
            //    canvasContext.drawImage(wallPic, TRACK_W * colIdX, TRACK_H * rowIdx);
            //    //colorRect((TRACK_W * colIdX), (TRACK_H * rowIdx), TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP, 'red');
            //} // end of is this track visible
            //else {                
            //    canvasContext.drawImage(roadPic, TRACK_W * colIdX, TRACK_H * rowIdx);
            //}

            var imgPic = trackPics[trackGrid[rowIdx][colIdX]];
                       
            canvasContext.drawImage(imgPic, drawTileX, drawTileY);

            drawTileX += TRACK_W;
        } // end of for each display track
        drawTileX = 0;
        drawTileY += TRACK_H;
    }
    drawTileY = 0;
} // end of drawTracks function