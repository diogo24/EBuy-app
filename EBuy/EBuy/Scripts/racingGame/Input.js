// mouse 
var mouseX = 0;
var mouseY = 0;

// keys
const KEY_LEFT_ARROW  = 37;
const KEY_UP_ARROW    = 38;
const KEY_RIGTH_ARROW = 39;
const KEY_DOWN_ARROW  = 40;

var keyHeld_Gas       = false;
var keyHeld_Reverse   = false;
var keyHeld_TurnLeft  = false;
var keyHeld_TurnRight = false;

function setupInput() {
    // add mouse events
    racingCanvas.mousemove(function (evt) {
        var mousePos = calculateMousePos(evt);
        // cheat/hack to test car in any position
        //carX = mouseX;
        //carY = mouseY;
        //carSpeedX = 4;
        //carSpeedY = -4;
    });

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function calculateMousePos(evt) {
    var rect = racingCanvas[0].getBoundingClientRect();
    var root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function keyPressed(evt) {
    // console.log("Key pressed" + evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW) {
        //carAng -= 0.5;
        keyHeld_TurnLeft = true;
    }

    if (evt.keyCode == KEY_RIGTH_ARROW) {
        //carAng += 0.5;
        keyHeld_TurnRight = true;
    }

    if (evt.keyCode == KEY_UP_ARROW) {
        //carSpeed += 0.5;
        keyHeld_Gas = true;
    }

    if (evt.keyCode == KEY_DOWN_ARROW) {
        //carSpeed -= 0.5;
        keyHeld_Reverse = true;
    }

    if (evt.keyCode == KEY_LEFT_ARROW
        || evt.keyCode == KEY_RIGTH_ARROW
        || evt.keyCode == KEY_UP_ARROW
        || evt.keyCode == KEY_DOWN_ARROW) {
        evt.preventDefault();
    }
}

function keyReleased(evt) {
    //console.log("Key released" + evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = false;
    }

    if (evt.keyCode == KEY_RIGTH_ARROW) {
        keyHeld_TurnRight = false;
    }

    if (evt.keyCode == KEY_UP_ARROW) {
        keyHeld_Gas = false;
    }

    if (evt.keyCode == KEY_DOWN_ARROW) {
        keyHeld_Reverse = false;
    }
}