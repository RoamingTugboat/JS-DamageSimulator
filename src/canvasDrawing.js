"use strict";
const hitboxCoords = require('./hitboxCoords');
const hitboxDamageColors = require('./hitboxDamageColors');

module.exports = {
  clear: function(canvas) {
    clearCanvas(canvas);
  },
  drawHead: function(canvas, damage) {
    drawOnCanvas(canvas, damage, hitboxCoords.coordsHeadVertices, hitboxCoords.coordsHeadText);
  },
  drawChest: function(canvas, damage) {
    drawOnCanvas(canvas, damage, hitboxCoords.coordsChestVertices, hitboxCoords.coordsChestText);
  },
  drawStomach: function(canvas, damage) {
    drawOnCanvas(canvas, damage, hitboxCoords.coordsStomachVertices, hitboxCoords.coordsStomachText);
  },
  drawLegs: function(canvas, damage) {
    drawOnCanvas(canvas, damage, hitboxCoords.coordsLegsVertices, hitboxCoords.coordsLegsText);
  },
}

const fontStyle = "30px Verdana";
const fontColor = "rgba(255, 255, 255, 1.0)";

function clearCanvas(canvas) {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawOnCanvas(canvas, damage, vertexCoords, textCoords) {
  if (!canvas.getContext) {
    console.log("Couldn't get canvas context");
    return;
  }
  const ctx = canvas.getContext('2d');
  const color = hitboxDamageColors.getColorBasedOnDamage(damage);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(vertexCoords[0][0],vertexCoords[0][1]);
  for(let i = 1; i<vertexCoords.length; i++) {
	ctx.lineTo(vertexCoords[i][0],vertexCoords[i][1]);
  }
  ctx.closePath();
  ctx.fill();
  ctx.font = fontStyle;
  ctx.fillStyle = fontColor;
  ctx.fillText(damage, textCoords[0], textCoords[1]);
}