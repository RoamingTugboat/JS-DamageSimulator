"use strict";

module.exports = class Weapon {
  constructor(name, damage, falloff, penetration, cycleTimeMs) {
    this.name = name;
    this.damage = damage;
    this.falloff = falloff;
    this.penetration = penetration;
    this.cycleTimeMs = cycleTimeMs;
  }
}