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
    adventureCanvas.mousemove(function (evt) {
        var mousePos = calculateMousePos(evt);
    });

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    warrior.setupInput(KEY_UP_ARROW, KEY_RIGTH_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

function calculateMousePos(evt) {
    var rect = adventureCanvas[0].getBoundingClientRect();
    var root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function keyPressed(evt) {
    keySet(evt, warrior, true);
}

function keyReleased(evt) {
    keySet(evt, warrior, false);
}

function keySet(keyEvt, warriorObject, setTo) {
    //console.log("Key pressed:" + keyEvt.keyCode)
    if (keyEvt.keyCode == warriorObject.controlKeyLEFT) {
        warriorObject.keyHeld_West = setTo;
    }

    if (keyEvt.keyCode == warriorObject.controlKeyRIGTH) {
        warriorObject.keyHeld_East = setTo;
    }

    if (keyEvt.keyCode == warriorObject.controlKeyUP) {
        warriorObject.keyHeld_North = setTo
    }

    if (keyEvt.keyCode == warriorObject.controlKeyDOWN) {
        warriorObject.keyHeld_South = setTo;
    }

    if (keyEvt.keyCode == warriorObject.controlKeyLEFT
        || keyEvt.keyCode == warriorObject.controlKeyRIGTH
        || keyEvt.keyCode == warriorObject.controlKeyUP
        || keyEvt.keyCode == warriorObject.controlKeyDOWN) {
        keyEvt.preventDefault();
    }
}