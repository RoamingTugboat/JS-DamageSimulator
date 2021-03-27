"use strict";
const Weapon = require('./weapon.js')

module.exports = {
  headDmg: function(weapon, range, hasHelmet) {
    return calculateDamage(weapon, range, 4.00, hasHelmet);
  },
  chestDmg: function(weapon, range, hasKevlar) {
    return calculateDamage(weapon, range, 1.00, hasKevlar);
  },
  stomachDmg: function(weapon, range, hasKevlar) {
    return calculateDamage(weapon, range, 1.25, hasKevlar);
  },
  legDmg: function(weapon, range) {
    return calculateDamage(weapon, range, 0.75, false);
  },
  headRange: function(weapon, wishDamage, hasHelmet) {
    return calculateRange(weapon, wishDamage, 4.00, hasHelmet);
  },
  chestRange: function(weapon, wishDamage, hasKevlar) {
    return calculateRange(weapon, wishDamage, 1.00, hasKevlar);
  },
  stomachRange: function(weapon, wishDamage, hasKevlar) {
    return calculateRange(weapon, wishDamage, 1.25, hasKevlar);
  },
  legRange: function(weapon, wishDamage) {
    return calculateRange(weapon, wishDamage, 0.75, false);
  }
}

function calculateDamage(weapon, range, hitboxMultiplier, hitboxHasArmor) {
  const baseDmg = weapon.damage;
  // Damage decreases to <falloff%> per 500 inches:
  const rangeMultiplier = Math.pow(weapon.falloff,(range/500));
  // Hitting an armored body part also incurs a damage decrease.
  // CSGO has it hardcoded at weaponPenetration/2. No idea where
  // the 2 comes from.
  let armorMultiplier = 1.0;
  if(hitboxHasArmor) {
	  armorMultiplier = weapon.penetration/2;
  }
  // This next line is the actual core formula by which Counter-Strike
  // calculates weapon damage, and it's what this entire Program is built
  // around.
  const damage = baseDmg * rangeMultiplier * hitboxMultiplier * armorMultiplier;
  // In-game tests revealed that dmg always gets floored.
  return Math.floor(damage);
}

function calculateRange(weapon, wishDamage, hitboxMultiplier, hitboxHasArmor) {
  // 4096in is the baked-in max range of all counter strike weapons (barring shotguns,
  // the CSGO Terrorist shotgun for example cuts off after like 500in).
  // Realistically, you're not going to see ranges further than 2000in on any maps
  // (I guess dust2 CT doors to T spawn is the longest range, alongside nuke outside
  // sniping).
  for(let range=4096; range>0; range=range-1) {
    const dmg = calculateDamage(weapon, range, hitboxMultiplier, hitboxHasArmor);
    if(dmg >= wishDamage) {
      return range;
    }
  }
  return -1;
}