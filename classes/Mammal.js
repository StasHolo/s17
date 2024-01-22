"use strict";
class Mammal extends Chordate {
    constructor(name, health, foodPreferings) {
        super(name, health, false, false, foodPreferings);
    }
}
const mouse = new Mammal("Джерри", "bad", ["plant"]);
const lion = new Mammal("Симба", "good", ["meat"]);
lion.eat(mouse);
