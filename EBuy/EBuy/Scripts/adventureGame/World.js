// world
const WORLD_W    = 40;
const WORLD_H    = 40;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;
const WORLD_GAP  = 5;

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
var worldGrid = [];

const WORLD_ROAD         = 0;
const WORLD_WALL         = 1;
const WORLD_PLAYER_START = 2;
const WORLD_END_FLAG     = 3;
const WORLD_TREE         = 4;
const WORLD_FLAG         = 5;


function warriorWorldHandling(warriorObject) {
    // warrior position in the grid
    var warriorWorldCol = Math.floor(warriorObject.x / WORLD_W);
    var warriorWorldRow = Math.floor(warriorObject.y / WORLD_H);

    // remove worlds with warrior
    if (warriorWorldCol >= 0
        && warriorWorldCol < WORLD_COLS
        && warriorWorldRow >= 0
        && warriorWorldRow < WORLD_ROWS) {

        // remove world and change warrior direction
        if (worldGrid[warriorWorldRow] &&
            (worldGrid[warriorWorldRow][warriorWorldCol] == WORLD_WALL
            || worldGrid[warriorWorldRow][warriorWorldCol] == WORLD_FLAG
            )
            ) {
            // next 2 lines added to fix bug, undoes the cr movement which got it onto the wall            

            warriorObject.x -= Math.cos(warriorObject.ang) * warriorObject.speed;
            warriorObject.y -= Math.sin(warriorObject.ang) * warriorObject.speed;

            warriorObject.speed *= -0.5;
        } // end of world found

        if(worldGrid[warriorWorldRow] && worldGrid[warriorWorldRow][warriorWorldCol] == WORLD_END_FLAG) {
            //console.log(warriorObject.name);
            loadLevel(level1);
        }
    } // end of valid col and row
} // end of warriorWorldHandling func

function drawWorlds() {
    // display worlds grid
    var drawTileX = 0;
    var drawTileY = 0;
    for (var rowIdx = 0; rowIdx < WORLD_ROWS; rowIdx++) {
        for (var colIdX = 0; colIdX < WORLD_COLS; colIdX++) {
            //if (worldGrid[rowIdx][colIdX] == WORLD_WALL) {
            //    canvasContext.drawImage(wallPic, WORLD_W * colIdX, WORLD_H * rowIdx);
            //    //colorRect((WORLD_W * colIdX), (WORLD_H * rowIdx), WORLD_W - WORLD_GAP, WORLD_H - WORLD_GAP, 'red');
            //} // end of is this world visible
            //else {                
            //    canvasContext.drawImage(roadPic, WORLD_W * colIdX, WORLD_H * rowIdx);
            //}

            var imgPic = worldPics[worldGrid[rowIdx][colIdX]];
                       
            canvasContext.drawImage(imgPic, drawTileX, drawTileY);

            drawTileX += WORLD_W;
        } // end of for each display world
        drawTileX = 0;
        drawTileY += WORLD_H;
    }
    drawTileY = 0;
} // end of drawWorlds function