"use strict";

module.exports = {
  getColorBasedOnDamage: function(damage) {
    return getColorBasedOnDamage(damage);
  }
}

const transparency = "0.55";
const colorNeat    = "rgba(240, 240, 240, "+transparency+")";
const colorFine    = "rgba(240, 210, 180, "+transparency+")";
const colorHurt01  = "rgba(240, 182, 156, "+transparency+")";
const colorHurt02  = "rgba(224, 128, 112, "+transparency+")";
const colorHurt03  = "rgba(208,  64,  32, "+transparency+")";
const colorHurt04  = "rgba(160,  32,   0, "+transparency+")";
const colorHurt05  = "rgba(96,   16,   0, "+transparency+")";

function getColorBasedOnDamage(damage) {
  // This simulator cares about exact damage numbers. In-game
  // though, players mostly care about how many shots they need
  // to land in order to score a kill. So, this method maps
  // damage values to the amount of shots required to kill someone
  // and returns that as a color.
  // E.g.: If a shot deals 34 damage, you need 3 for a kill - at 33, you need 4.
  //       If a shot deals 20 damage, you need 5 for a kill - at 19, you need 6.
  if(damage >= 100) {
    return colorHurt05;
  } else if(damage >= 50) {
    return colorHurt04;
  } else if(damage >= 34) {
    return colorHurt03;
  } else if(damage >= 25) {
    return colorHurt02;
  } else if(damage >= 20) {
   return colorHurt01;
  } else if(damage >= 17) {
    return colorFine;
  } else {
    return colorNeat;
  }		
}