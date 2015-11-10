var racingCanvas;
var canvasContext;

// canvas dimensions
var canvasWidth  = 800;
var canvasHeigth = 600;


var blueCar  = new carClass();
var greenCar = new carClass();

$(function () {
    racingCanvas  = $("#adventure-canvas");
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

    loadLevel(level1);
}

function loadLevel(level) {
    trackGrid = level.map(function (arr) { return arr.slice(); }); // create a copy of the 2d array

    blueCar.reset(carPic, "Blue");
    greenCar.reset(player2CarPic, "Green");
}

function callCanvasFunctions() {
    moveInCanvas();
    drawInCanvas();
}

function moveInCanvas() {
    blueCar.move();
    greenCar.move();
}

function drawInCanvas() {
    //clearScreen();
    
    drawTracks();

    blueCar.draw();
    greenCar.draw();

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
