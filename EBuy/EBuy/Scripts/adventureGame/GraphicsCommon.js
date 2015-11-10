// shapes helper functions
function drawBitMapCenteredWithRotation(useBitMap, atX, atY, withAng) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitMap, -useBitMap.width / 2, -useBitMap.height / 2);
    canvasContext.restore();
}

function colorRect(leftX, topX, width, heigth, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topX, width, heigth);
}

function colorCircle(leftX, topX, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(leftX, topX, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorText(textString, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(textString, textX, textY);
}