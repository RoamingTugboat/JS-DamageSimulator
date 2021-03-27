"use strict";
const Weapon = require("./weapon.js");

let weapons = [];

module.exports = {
  getWeapons: function() {
    return weapons;
  },
  importWeapons(url, callback) {
    importWeapons(url, callback);
  }
}

function importWeapons(url, callback) {
  console.log("Importing weapons from "+url+"...");
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(weaponsList) {
    weapons = weaponsList;
	console.log("Imported weapons.");
	callback();
  })
}