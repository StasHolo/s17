class Chordate {
    name
    health
    isFlying
    isSwimming
    foodPreferings

    constructor(name, health, isFlying, isSwimming, foodPreferings) {
        this.name = name
        this.health = health
        this.isFlying = isFlying
        this.isSwimming = isSwimming
        this.foodPreferings = foodPreferings
    }

    eat(target) {
        console.log(`${this.name} съел ${target.name}`)
    }
}

const upir = new Chordate("Упырь", "good", true, false, ["meat"])
const monster = new Chordate("Монстр", "good", false, true, ["meat"])

monster.eat(upir)

console.log(monster.name)