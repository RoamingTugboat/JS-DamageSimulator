"use strict";
const weaponSelect = require("./weaponSelect.js");
const canvasDrawing = require("./canvasDrawing.js");
const calculations = require("./calculations.js");

module.exports = {
  importWeapons: function(url, callback) {
    weaponSelect.importWeapons(url, callback);
  },
  selectedWeaponName: function() {
    return weaponSelect.getCurrentWeapon().name;
  },
  selectedWeaponCadenceMs: function() {
    return weaponSelect.getCurrentWeapon().cycleTimeMs;
  },
  selectedWeaponIncrement: function() {
    weaponSelect.incrementWeapon();
  },
  selectedWeaponDecrement: function() {
    weaponSelect.decrementWeapon();
  },
  clearCanvas: function(canvas) {
    canvasDrawing.clear(canvas);
  },
  drawHead: function(canvas, range, hasHelmet) {
    const currentWeapon = weaponSelect.getCurrentWeapon();
    const damage = calculations.headDmg(currentWeapon, range, hasHelmet);
    canvasDrawing.drawHead(canvas, damage);
  },
  drawChest: function(canvas, range, hasKevlar) {
    const currentWeapon = weaponSelect.getCurrentWeapon();
    const damage = calculations.chestDmg(currentWeapon, range, hasKevlar);
    canvasDrawing.drawChest(canvas, damage);
  },
  drawStomach: function(canvas, range, hasKevlar) {
    const currentWeapon = weaponSelect.getCurrentWeapon();
    const damage = calculations.stomachDmg(currentWeapon, range, hasKevlar);
    canvasDrawing.drawStomach(canvas, damage);
  },
  drawLegs: function(canvas, range) {
    const currentWeapon = weaponSelect.getCurrentWeapon();
    const damage = calculations.legDmg(currentWeapon, range);
    canvasDrawing.drawLegs(canvas, damage);
  },
  ohkHeadRange: function(hasHelmet) {
    const currentWeapon = weaponSelect.getCurrentWeapon();
    return calculations.headRange(currentWeapon, 100, hasHelmet);
  }
}