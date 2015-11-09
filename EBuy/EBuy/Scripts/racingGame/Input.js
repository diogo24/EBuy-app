// mouse 
var mouseX = 0;
var mouseY = 0;

// keys
const KEY_LEFT_ARROW  = 37;
const KEY_UP_ARROW    = 38;
const KEY_RIGTH_ARROW = 39;
const KEY_DOWN_ARROW  = 40;

const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;
const KEY_A = 65;

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

    blueCar.setupInput(KEY_UP_ARROW, KEY_RIGTH_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
    greenCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
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
    keySet(evt, blueCar, true);
    keySet(evt, greenCar, true);
}

function keyReleased(evt) {
    keySet(evt, blueCar, false);
    keySet(evt, greenCar, false);
}

function keySet(keyEvt, carObject, setTo) {
    console.log("Key pressed:" + keyEvt.keyCode)
    if (keyEvt.keyCode == carObject.controlKeyLEFT) {
        carObject.keyHeld_TurnLeft = setTo;
    }

    if (keyEvt.keyCode == carObject.controlKeyRIGTH) {
        carObject.keyHeld_TurnRight = setTo;
    }

    if (keyEvt.keyCode == carObject.controlKeyUP) {
        carObject.keyHeld_Gas = setTo
    }

    if (keyEvt.keyCode == carObject.controlKeyDOWN) {
        carObject.keyHeld_Reverse = setTo;
    }

    if (keyEvt.keyCode == carObject.controlKeyLEFT
        || keyEvt.keyCode == carObject.controlKeyRIGTH
        || keyEvt.keyCode == carObject.controlKeyUP
        || keyEvt.keyCode == carObject.controlKeyDOWN) {
        keyEvt.preventDefault();
    }
}