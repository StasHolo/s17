class Human extends Mammal {
    constructor(name: string, health: HealthType) {
        super(name, health, ['plant', 'meat'])
    }

    feed(target: Chordate, food: FoodPreferingsType) {
        console.log(`${this.name} покормил ${target.name}. ${target.name} съел ${food}`)
    }
}

const stepa = new Human("Степан", "bad")

stepa.feed(grom, "meat")