var canvas;
var canvasContext;

// canvas dimensions
var canvasWidth  = 800;
var canvasHeigth = 600;

const BALL_COUNT = 800;
var balls        = [];

$(function () {
    canvas        = $("#many-balls-canvas");
    canvasContext = canvas[0].getContext('2d');

    canvasWidth  = canvas.width();
    canvasHeigth = canvas.height();

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
    //loadImages();
    imageLoadingDoneSoStartGame();
});

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 60;
    setInterval(callCanvasFunctions, 1000 / framesPerSecond);
    
    //setupInput();
    loadBalls();
    loadLevel(level1);
}

function loadBalls(){
    for (var i = 0; i < BALL_COUNT; i++) {
        balls.push(new ballClass());
    }
}

function loadLevel(level) {
    levelGrid = level.map(function (arr) { return arr.slice(); }); // create a copy of the 2d array

    for (var i = 0; i < BALL_COUNT; i++) {
        balls[i].reset();        
    }
}

function callCanvasFunctions() {
    moveInCanvas();
    drawInCanvas();
}

function moveInCanvas() {
    for (var i = 0; i < BALL_COUNT; i++) {
        balls[i].move();
    }
}

function drawInCanvas() {
    clearScreen();
    
    drawLevel();

    for (var i = 0; i < BALL_COUNT; i++) {
        balls[i].draw();
    }

    // mouse position in the grid
    //var mousePosCol = Math.floor(mouseX / LEVEL_W);
    //var mousePosRow = Math.floor(mouseY / LEVEL_H);

    //// print mouse position
    //colorText(mousePosCol + "," + mousePosRow, mouseX, mouseY, "yellow");
}

function clearScreen() {
    // background rectagle
    colorRect(0, 0, canvasWidth, canvasHeigth, 'black'); // clear screen
}
