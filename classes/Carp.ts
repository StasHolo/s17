class Carp extends Fish {
    constructor(name: string, health: HealthType, isFlying: boolean, foodPreferings: FoodPreferingsType[]){
        super (name, health, isFlying, ['meat'] )
    }
    swim(target: Fish){
        console.log(`${this.name} плавал вместе с ${target.name}`)
    }
}

const carpik = new Carp ("Карпик", "good", false, ['meat'])

carpik.swim(sharkfish)