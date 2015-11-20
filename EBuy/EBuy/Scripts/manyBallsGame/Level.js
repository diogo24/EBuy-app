// level
const LEVEL_W    = 40;
const LEVEL_H    = 40;
const LEVEL_COLS = 20;
const LEVEL_ROWS = 15;

var level1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
              [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
              [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
              [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var levelList = [level1]; // list of multiple levels
var levelGrid = [];

const LEVEL_ROAD         = 0;
const LEVEL_WALL         = 1;

function getLevelGridColumnIndex(atX) {
    return Math.floor(atX / LEVEL_W);
}

function getLevelGridRowIndex(atY) {
    return Math.floor(atY / LEVEL_H);
}

function getTileTypeAtPixelCoord(atX, atY) {
    // position in the grid
    var levelCol = getLevelGridColumnIndex(atX);
    var levelRow = getLevelGridRowIndex(atY);

    return levelGrid[levelRow][levelCol];
} // end of getTileTypeAtPixelCoord func

function drawLevel() {
    // display level grid
    var drawTileX = 0;
    var drawTileY = 0;
    for (var rowIdx = 0; rowIdx < LEVEL_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < LEVEL_COLS; colIdX++) {
            if (levelGrid[rowIdx][colIdX] == LEVEL_WALL) {
                colorRect((LEVEL_W * colIdX), (LEVEL_H * rowIdx), LEVEL_W, LEVEL_H, 'red');
            } // end of is this level visible

            drawTileX += LEVEL_W;
        } // end of for each display level
        drawTileX = 0;
        drawTileY += LEVEL_H;
    }
    drawTileY = 0;
} // end of drawLevel function