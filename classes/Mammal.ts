class Mammal extends Chordate{
    
    constructor(name: string, health: HealthType, foodPreferings: FoodPreferingsType[]) {
        super(name, health, false, false, foodPreferings)

    }
}

const mouse = new Mammal("Джерри", "bad", ["plant"])

const lion = new Mammal("Симба", "good", ["meat"])

lion.eat(mouse)