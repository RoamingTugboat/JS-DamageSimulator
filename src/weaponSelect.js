"use strict";
const weaponDb = require("./weaponDatabase.js");

module.exports = {
  getCurrentWeapon: function() {
    return getCurrentWeapon();
  },
  incrementWeapon: function() {
    incrementWeapon();
  },
  decrementWeapon: function() {
    decrementWeapon();
  },
  importWeapons: function(url, callback) {
	  weaponDb.importWeapons(url, callback);
  }
}

let currentWeaponIndex = 0;

function getCurrentWeapon() {
    return weaponDb.getWeapons()[currentWeaponIndex];
}

function incrementWeapon() {
  currentWeaponIndex = (currentWeaponIndex+1) % weaponDb.getWeapons().length;
}

function decrementWeapon() {
  currentWeaponIndex = (currentWeaponIndex-1);
  if(currentWeaponIndex < 0) {
    currentWeaponIndex = weaponDb.getWeapons().length-1;
  }
}

function getJsonString() {
  return JSON.stringify(weaponDb.getWeapons());
}