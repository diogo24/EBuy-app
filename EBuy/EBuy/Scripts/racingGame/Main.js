var racingCanvas;
var canvasContext;

// canvas dimensions
var canvasWidth  = 800;
var canvasHeigth = 600;


$(function () {
    racingCanvas  = $("#racing-canvas");
    canvasContext = racingCanvas[0].getContext('2d');

    canvasWidth  = racingCanvas.width();
    canvasHeigth = racingCanvas.height();

    //// draw multiple time: simulate movement
    //var framesPerSecond = 60;
    //setInterval(callCanvasFunctions, 1000 / framesPerSecond);

    //setupInput();

    ////trackLoadImages();
    ////carImageLoad();
    //loadImages();

    //// reset tracks
    //carReset();

    colorRect(0, 0, canvasWidth, canvasHeigth, "green");
    colorText("Loading Images", canvasWidth / 2, canvasHeigth / 2, "white");

    //redesign game start
    loadImages();
});

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 60;
    setInterval(callCanvasFunctions, 1000 / framesPerSecond);

    setupInput();
    carReset();
}

function callCanvasFunctions() {
    moveInCanvas();
    drawInCanvas();
}

function moveInCanvas() {
    carMove();

    carTrackHandling();
}

function drawInCanvas() {
    //clearScreen();
    
    drawTracks();

    carDraw();

    // mouse position in the grid
    var mouseTrackCol = Math.floor(mouseX / TRACK_W);
    var mouseTrackRow = Math.floor(mouseY / TRACK_H);

    // print mouse position
    colorText(mouseTrackCol + "," + mouseTrackRow, mouseX, mouseY, "yellow");

    // remove track with mouse
    //if(mouseTrackCol >= 0
    //    && mouseTrackCol < TRACK_COLS
    //    && mouseTrackRow >= 0
    //    && mouseTrackRow < TRACK_ROWS) {
    //    trackGrid[mouseTrackRow][mouseTrackCol] = false;
    //}
}

function clearScreen() {
    // background rectagle
    colorRect(0, 0, canvasWidth, canvasHeigth, 'black'); // clear screen
}
