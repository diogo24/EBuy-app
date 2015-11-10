// world
const WORLD_W    = 50;
const WORLD_H    = 50;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;
const WORLD_GAP  = 5;

var level1 = [[4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                 [4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                 [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                 [1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 0, 1],
                 [1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 1],
                 [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                 [1, 2, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 1],
                 [1, 0, 0, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//var levelList = [level1]; // list of multiple levels
var worldGrid = [];

const WORLD_ROAD         = 0;
const WORLD_WALL         = 1;
const WORLD_PLAYER_START = 2;
const WORLD_GOAL     = 3;
const WORLD_TREE         = 4;
const WORLD_FLAG         = 5;


function getTileTypeAtPixelCoord(atX, atY) {
    // warrior position in the grid
    var warriorWorldCol = Math.floor(atX / WORLD_W);
    var warriorWorldRow = Math.floor(atY / WORLD_H);

    // remove worlds with warrior
    if (warriorWorldCol >= 0
        && warriorWorldCol < WORLD_COLS
        && warriorWorldRow >= 0
        && warriorWorldRow < WORLD_ROWS
        && worldGrid[warriorWorldRow]) {

        return worldGrid[warriorWorldRow][warriorWorldCol];
    } // end of valid col and row
    return WORLD_WALL;
} // end of warriorWorldHandling func

function drawWorlds() {
    // display worlds grid
    var drawTileX = 0;
    var drawTileY = 0;
    for (var rowIdx = 0; rowIdx < WORLD_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < WORLD_COLS; colIdX++) {
            var imgPic = worldPics[worldGrid[rowIdx][colIdX]];                       
            canvasContext.drawImage(imgPic, drawTileX, drawTileY);

            drawTileX += WORLD_W;
        } // end of for each display world
        drawTileX = 0;
        drawTileY += WORLD_H;
    }
    drawTileY = 0;
} // end of drawWorlds function