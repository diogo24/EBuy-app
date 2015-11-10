var adventureCanvas;
var canvasContext;

// canvas dimensions
var canvasWidth  = 800;
var canvasHeigth = 600;


var warrior = new warriorClass();

$(function () {
    adventureCanvas = $("#adventure-canvas");
    canvasContext   = adventureCanvas[0].getContext('2d');

    canvasWidth  = adventureCanvas.width();
    canvasHeigth = adventureCanvas.height();

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
    worldGrid = level.map(function (arr) { return arr.slice(); }); // create a copy of the 2d array

    warrior.reset(warriorPic, "warrior");
}

function callCanvasFunctions() {
    moveInCanvas();
    drawInCanvas();
}

function moveInCanvas() {
    warrior.move();
}

function drawInCanvas() {
    //clearScreen();
    
    drawWorlds();

    warrior.draw();

    // mouse position in the grid
    var mouseWorldCol = Math.floor(mouseX / WORLD_W);
    var mouseWorldRow = Math.floor(mouseY / WORLD_H);

    // print mouse position
    colorText(mouseWorldCol + "," + mouseWorldRow, mouseX, mouseY, "yellow");
}

function clearScreen() {
    // background rectagle
    colorRect(0, 0, canvasWidth, canvasHeigth, 'black'); // clear screen
}
