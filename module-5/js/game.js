'use strict';

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);
  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const mango = new Warrior('Mango', 1000, 'sword');
console.log(mango);

mango.gainXp(2000);
console.log(mango);

mango.attack();
console.log(mango);
